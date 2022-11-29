import { marker_size } from './Hover_style';
import { Fragment, useEffect } from 'react';
import GoogleMap from 'google-map-react';
import MarkerHover from './MarkerHover';
import React from 'react';

export default function Map({houses}) {
  
  const defaultProps = {
    center: [59.838043, 30.337157],
    zoom: 9,
    houses: [
      {id: 'A', lat: 59.955413, lng: 30.337844},
      {id: 'B', lat: 59.724, lng: 30.080}
    ],
    hoverKey: false
  };

  const places = houses
    .map(house => {

      if ('location' in house && 'address' in house['location']) {
        
        const { property_id } = house;
        const coordinate  = house['location']['address']['coordinate']

        return (
          <MarkerHover
            key={property_id}
            lat={coordinate.lat}
            lng={coordinate.lon}
            text={"h"}
            hover={defaultProps.hoverKey === property_id} />
        )
      }

    })
  
  useEffect(() => {
    console.log(houses)
  })

  
  const _onBoundChange = (center, zoom) => {
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

  return (
      <Fragment>
        <GoogleMap
          center={defaultProps.center}
          zoom={defaultProps.zoom}
          hoverDistance={marker_size / 2}
          onBoundChange={_onBoundChange}
          onChildClick={_onChildClick}
          onChildMouseEnter={_onChildMouseEnter}
          onChildMouseLeave={_onChildMouseLeave}
          bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_KEY}}
          >
          { places }
        </GoogleMap>
      </Fragment>
  )
}

