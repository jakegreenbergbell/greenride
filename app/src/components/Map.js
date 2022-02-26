import React, { useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css"

const libraries = ["places"]

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 34.0689,
  lng: -118.4451,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  let [fromLat, setFromLat] = useState("");
  let [fromLong, setFromLong] = useState("");
  let [toLat, setToLat] = useState("");
  let [toLong, setToLong] = useState("");

  const handleFromLat = (val) => {
    setFromLat(val);
    console.log(val);
  }

  const handleFromLong = (val) => {
    setFromLong(val);
    console.log(val);
  }

  const handleToLat = (val) => {
    setToLat(val);
    console.log(val);
  }

  const handleToLong = (val) => {
    setToLong(val);
    console.log(val);
  }

  if (loadError) return "Load error";
  if (!isLoaded) return "Loading";
  return (
    <div className="container w-full h-full">

      <LocationSearch text="From" receiveLat={handleFromLat} receiveLong={handleFromLong}/>
      <LocationSearch text="To" receiveLat={handleToLat} receiveLong={handleToLong}/>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
      ></GoogleMap>
    </div>
  );
}

function LocationSearch(props) {
  const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete();

  return (
    <div>
      <Combobox onSelect={async (address) => {
        try {
          const results = await getGeocode({ address });
          const { lat, lng } = await getLatLng(results[0]);
          props.receiveLat(lat);
          props.receiveLong(lng);
        } catch (error) {
          console.log("error!");
        }
      }}>

        <ComboboxInput value={value} onChange={(e) => {
          setValue(e.target.value);
        }}
          placeholder={props.text}
          disabled={!ready}
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" && data.map(({ id, description }) => (<ComboboxOption key={id} value={description} />))}
          </ComboboxList>
        </ComboboxPopover>

      </Combobox>
    </div>

  );
}
