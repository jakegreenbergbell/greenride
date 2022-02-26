import React from "react"
import { GoogleMap, useLoadScript, Marker, withScriptjs, withGoogleMap, InfoWindow } from "@react-google-maps/api"

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat:  34.0689,
  lng: -118.4451,
};

export default function Map(){
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.local.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  if(loadError) return "Load error"
  if(!isLoaded) return "Loading"
  return(
    <div className="container">
      <GoogleMap 
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
      >
      </GoogleMap>
    </div>
  )
}