import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import classNames from 'classnames';
import './Map.css';

const Marker = ({ text, $hover, zIndex }) => {
  
  const markerClass = classNames({
    'edb-map__marker': true,
    'greatPlaceStyleHover': $hover
  });
  const style = {
    zIndex: $hover ? 1000 : zIndex
  };

  return (<div className={markerClass} style={style}>{text}</div>)
}

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 51.453617, lng: -2.591400 },
    zoom: 14
  };

  render() {

    const markers = this.props.data.map( (m, index) => <Marker key={index} lat={m.address.lat} lng={m.address.lng} text={m.name} zIndex={index} /> );

    return (
      <div className='edb-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBgoBQzjyWi7k59ASZNHQsVkfEThpwXq0M' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          hoverDistance={15}
        >
          {markers}
        </GoogleMapReact>
      </div>
    );
  }
}