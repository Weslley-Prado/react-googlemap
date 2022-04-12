import GoogleMapReact from 'google-map-react';
import React,{ Component } from 'react';


export interface MapReactProps{}




class MapReact extends Component {
    static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
  
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact 
            bootstrapURLKeys={{ key: 'AIzaSyAD4K4vZN0IagbESNGPdGlap_LWdLYQUOE',}}
            defaultCenter={{ lat: -15.826691,lng: -47.921822   }}
            defaultZoom={10}
          >
           
          </GoogleMapReact>
        </div>
      );
    }
  }
  
  export default MapReact;