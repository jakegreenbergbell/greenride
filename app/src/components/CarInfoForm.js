import React, { useState, useEffect, useContext } from "react";
import carData from "../data/carData";
import { InfoContext } from "../InfoProvider";

function CarInfoForm() {
  const [make, setMake] = useState("");
  const [availableMakes, setAvailableMakes] = useState([]);
  const [model, setModel] = useState("");
  const [availableModels, setAvailableModels] = useState([]);
  const [year, setYear] = useState("");
  const [availableYears, setAvailableYears] = useState([]);
  const [CO2PerMile, setCO2PerMile] = useState(-1);

  const carMakeSet = new Set();

  const { totalDistance, setTotalDistance, totalDuration, setTotalDuration } =
    useContext(InfoContext);

  // Initialize the available makes at the beginning
  useEffect(() => {
    for (const year in carData) {
      for (const car in carData[year]) {
        carMakeSet.add(carData[year][car]["Represented Test Veh Make"]);
      }
    }
    const carMakeArray = Array.from(carMakeSet).sort();
    setAvailableMakes(carMakeArray);
    setMake(carMakeArray[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update the available models when make changes
  useEffect(() => {
    updateModels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [make]);

  // Update the available years when model changes
  useEffect(() => {
    updateYears();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model]);

  // Update the CO2 when year changes
  useEffect(() => {
    findC02();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);

  // Change the make, should trigger model refresh
  const changeMake = (e) => {
    const { value } = e.target;
    setMake(value);
  };

  // Change the model, should trigger year refresh
  const changeModel = (e) => {
    const { value } = e.target;
    setModel(value);
  };

  // Change the year
  const changeYear = (e) => {
    const { value } = e.target;
    setYear(value);
  };

  // Update list of available models for the selected car make
  const updateModels = () => {
    const carModels = new Set();
    for (const year in carData) {
      for (const car in carData[year]) {
        if (
          carData[year][car]["Represented Test Veh Make"].toLowerCase() ===
          make.toLowerCase()
        ) {
          carModels.add(carData[year][car]["Represented Test Veh Model"]);
        }
      }
    }
    const modelsArray = Array.from(carModels).sort();
    setAvailableModels(modelsArray);
    if (modelsArray.length > 0) {
      setModel(modelsArray[0]);
    }
  };

  // Update list of available years for the selected car make and model
  const updateYears = () => {
    const carYears = new Set();
    for (const year in carData) {
      for (const car in carData[year]) {
        if (!carData[year][car]["Represented Test Veh Make"]) {
          console.log(carData[year][car]["Represented Test Veh Make"]);
        }
        if (
          carData[year][car]["Represented Test Veh Make"].toLowerCase() ===
          make.toLowerCase()
        ) {
          if (
            carData[year][car]["Represented Test Veh Model"].toLowerCase() ===
            model.toLowerCase()
          ) {
            carYears.add(year);
          }
        }
      }
    }
    const yearsArray = Array.from(carYears).sort();
    setAvailableYears(yearsArray);
    if (yearsArray.length > 0) {
      setYear(yearsArray[0]);
    }
  };

  // Find the CO2 emissions
  const findC02 = () => {
    console.log(`${year} ${make} ${model}`);
    const carYear = carData[year];
    let emissions = "-1";
    for (const car in carYear) {
      if (
        carYear[car]["Represented Test Veh Make"].toLowerCase() ===
        make.toLowerCase()
      ) {
        if (
          carYear[car]["Represented Test Veh Model"].toLowerCase() ===
          model.toLowerCase()
        ) {
          emissions = "0";
          if (carYear[car]["CO2 (g/mi)"]) {
            emissions = carYear[car]["CO2 (g/mi)"];
            console.log("Found CO2");
          }
          break;
        }
      }
    }
    if (emissions === -1) {
      setCO2PerMile("Not found");
    }
    setCO2PerMile(emissions);
  };

  return (
    <div className="w-full p-8">
      <form>
        <label className="text-xs">
          Car make:
          <br />
          <select
            className="bg-green-300 text-xl rounded-lg w-full p-1"
            value={make}
            onChange={changeMake}
          >
            {availableMakes.map((make, ind) => {
              return (
                <option value={make} key={make}>
                  {make}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <label className="text-xs">
          Car model:
          <br />
          <select
            className="bg-green-300 text-xl rounded-lg w-full p-1"
            value={model}
            onChange={changeModel}
          >
            {availableModels.map((model) => {
              return (
                <option value={model} key={model}>
                  {model}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <label className="text-xs">
          Car year:
          <br />
          <select
            className="bg-green-300 text-xl rounded-lg w-full p-1"
            value={year}
            onChange={changeYear}
          >
            {availableYears.map((year, ind) => {
              return (
                <option value={year} key={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </label>
        <br />
      </form>
      <div className="mt-4 w-full flex justify-center text-lg">
        <div className="flex-col">
          <div>
            Car's CO2 emissions: {Math.round(CO2PerMile / 10) / 100} kg CO2 per
            mile
          </div>
          <div>Total distance: {parseInt(totalDistance)} miles</div>
          <div>
            Total emissions:{" "}
            {Math.round(
              (parseInt(totalDistance.split(" ")[0]) * CO2PerMile) / 10
            ) / 100}{" "}
            kg of CO2
          </div>
          <div>Total duration: {totalDuration}</div>
        </div>
      </div>
    </div>
  );
}

export default CarInfoForm;
