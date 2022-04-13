import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';
import './MapReact.css'



export interface MapReactProps {
  lat: number,
  lgn: number,
  text: string,
  event:any,
 
}
export default function MapReact() {

  const [lat, setLat] = useState("")
  const [lgn, setLgn] = useState("")
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(center)
  }

  let center = {
    lat: -29.167391,
    lng:-51.180061
  }


  const defaultProps = {
    center,
    zoom: 11
  };




  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <form onChange={handleSubmit}>
      <label>Latitude</label>
        <input type="text" value={lat}
          onChange={(e) => setLat(e.target.value)} />
        <label>Longitude</label>
        <input type="text"  value={lgn}
          onChange={(e) => setLgn(e.target.value)} />
        <input className = "subimission" type="submit" value="Buscar" />
      </form>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAD4K4vZN0IagbESNGPdGlap_LWdLYQUOE" }}
        defaultCenter={center}
        defaultZoom={defaultProps.zoom}
      >

      </GoogleMapReact>
    </div>
  );
}
