import './App.css';
import React from "react"
import { GoogleMap, useLoadScript, Marker, withScriptjs, withGoogleMap, InfoWindow } from "@react-google-maps/api"
import Map from './components/GoogleMap.js';

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat:  34.0689,
  lng: -118.4451,
};

export default function App(){
  return(
    <div className="container">
      <Map/>
    </div>
  )
}