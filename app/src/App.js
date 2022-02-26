import React from "react";
import CarInfoForm from "./components/CarInfoForm";
import Map from "./components/Map";

function App() {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="flex flex-col flex-[1] bg-white justify-center items-center">
        <div className="text-green-400 text-4xl">GreenRide</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <CarInfoForm />
      </div>
      <div className="flex flex-[4] bg-slate-400 justify-center items-center w-full h-full">
        <Map />
      </div>
    </div>
  );
}

export default App;
