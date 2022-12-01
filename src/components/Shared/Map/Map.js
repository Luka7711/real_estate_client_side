import { marker_size } from './Hover_style';
import { Fragment, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { checkKeyExist } from '../../../utils';
import GoogleMap from 'google-map-react';
import MarkerHover from './MarkerHover';
import React, { useState } from 'react';

function Map({ houses, mapCenter }) {

  const defaultZoom = 11;
  const [zoom, setZoom] = useState(defaultZoom);
  const [hoverKey, setHoverKey] = useState("");

  const places = houses
    .map(house => {

      const isAddressExist = checkKeyExist(house, 'address');

      if (isAddressExist) {

        const isCoordinateExist = house['location']['address']['coordinate']

        if (isCoordinateExist !== null) {

          const { property_id } = house;
          const coordinate = house['location']['address']['coordinate']
  
          return (
            <MarkerHoverMemo
              key={property_id}
              lat={coordinate.lat}
              lng={coordinate.lon}
              hover={hoverKey === property_id} 
              house={house}
              zoom={zoom}
              defaultZoom={defaultZoom}
              />
          )

        }
      }
    })
  

  const _onZoom = (center) => {
    setZoom(center.zoom);
  }

  const _onChildClick = (key, childProps) => {
    console.log(childProps, "childProps");
  }

  const _onChildMouseEnter = (key) => {
    setHoverKey(key);
  }

  const _onChildMouseLeave = () => {
    setHoverKey("")
  }

  const createMapOptions = () => {
    return {
      gestureHandling: 'greedy'
    }
  }

  return (
      <Fragment>
        <GoogleMap
          center={mapCenter}
          zoom={zoom}
          hoverDistance={marker_size / 2}
          onChange={_onZoom}
          onChildClick={_onChildClick}
          onChildMouseEnter={_onChildMouseEnter}
          onChildMouseLeave={_onChildMouseLeave}
          bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_KEY}}
          options={createMapOptions}
          >
          { places }
        </GoogleMap>
      </Fragment>
  )
}

const mapStateToProps = state => {
  
  let center;
  
  if (state.searchLocation) {

    center = state.searchLocation

  } else if (!state.searchLocation && state.userGeolocation) {

    center = state.userGeolocation

  }

  return {
    mapCenter: [center.lat, center.lng]
  }
}

const MarkerHoverMemo = React.memo(MarkerHover)

export default connect(mapStateToProps)(Map);