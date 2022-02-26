import React from "react";
import CarInfoForm from "./components/CarInfoForm";

function App() {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="flex flex-col flex-[1] bg-blue-500 justify-center items-center">
        Form
      </div>
      <div className="flex flex-[4] bg-slate-400 justify-center items-center">
        Map
      </div>
    </div>
  );
}

export default App;
