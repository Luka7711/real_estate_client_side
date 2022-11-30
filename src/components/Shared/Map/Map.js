import { marker_size } from './Hover_style';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import GoogleMap from 'google-map-react';
import MarkerHover from './MarkerHover';
import React from 'react';
import { checkKeyExist } from '../../../utils';

function Map({ houses,mapCenter }) {
  
  const defaultProps = {
    zoom: 11,
    hoverKey: false
  };

  const places = houses
    .map(house => {

      const isAddressExist = checkKeyExist(house, 'address');

      if (isAddressExist) {

        const isCoordinateExist = house['location']['address']['coordinate']

        if (isCoordinateExist !== null) {

          const { property_id } = house;
          const coordinate = house['location']['address']['coordinate']
  
          return (
            <MarkerHover
              key={property_id}
              lat={coordinate.lat}
              lng={coordinate.lon}
              text={"h"}
              hover={defaultProps.hoverKey === property_id} />
          )

        }
      }
    })
  
  useEffect(() => console.log(mapCenter))

  const _onBoundChange = (center, zoom) => {
    console.log("zoom event")
    console.log(center);
    console.log(zoom);
  }

  const _onChildClick = (key, childProps) => {
    console.log(key, "key");
    console.log(childProps, "childProps");
  }

  const _onChildMouseEnter = (key) => {
    console.log(key, "key");
  }

  const _onChildMouseLeave = () => {
    console.log('MOUSE LEAVE EVENT')
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
          zoom={defaultProps.zoom}
          hoverDistance={marker_size / 2}
          onChange={_onBoundChange}
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

export default connect(mapStateToProps)(Map);