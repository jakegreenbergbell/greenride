import React, { useState, useEffect } from 'react'
import carData from '../data/carData'

function CarInfoForm() {

  let [make, setMake] = useState("ACURA"); // By default, the select item will start on ACURA since that's alphabetically first
  let [model, setModel] = useState("ILX"); // Actual model selected
  let [availableModels, setAvailableModels] = useState(["Select Car Make"]); // List of available models based on selected car make

  useEffect(() => {
    updateModels(make); // Page starts with car make ACURA
  }, [make]);

  const carMakes = new Set(); // Set to store all car makes. Set instead of array here because car makes can appear multiple times

  for (const year in carData) {
    for (const car in carData[year]) {
      carMakes.add(carData[year][car]["Represented Test Veh Make"])
    }
  }

  const carBrand = Array.from(carMakes); // Array of car makes/brands
  carBrand.sort(); // Sort array by alphabetical order

  const changeMake = (e) => {
    let { name, value } = e.target;
    setMake(value);
  }

  const changeModel = (e) => {
    let { name, value } = e.target;
    setModel(value);
  }

  // Update list of available models for the selected car make
  const updateModels = (value) => {
    const carModels = new Set();
    for (const year in carData) {
      for (const car in carData[year]) {
        if (carData[year][car]["Represented Test Veh Make"] === value) {
          carModels.add(carData[year][car]["Represented Test Veh Model"]);
        }
      }
    }
    setAvailableModels(Array.from(carModels).sort());
  }

  return (
    <div>
      <form>
        <label>
          Car Make:
          <select name="make" onChange={changeMake}>
            {carBrand.map((brand, ind) => { return <option value={brand}>{brand}</option> })}
          </select>
        </label>
        <label>
          Car Model:
          <select name="model" onChange={changeModel}>
            {availableModels.map((model, ind) => { return <option value={model}>{model}</option> })}
          </select>
        </label>
      </form>
    </div>
  );
}

export default CarInfoForm;
