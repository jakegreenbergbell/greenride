import React, { useState } from "react";

export const InfoContext = React.createContext({
  totalDistance: "0 mi",
  totalDuration: "0 hr",
  setTotalDistance: () => {},
  setTotalDirection: () => {},
});

export const InfoProvider = ({ children }) => {
  // Information for the whole app
  const [totalDistance, setTotalDistance] = useState("0 mi");
  const [totalDuration, setTotalDuration] = useState("0 hr");

  return (
    <InfoContext.Provider
      value={{
        totalDistance,
        setTotalDistance,
        totalDuration,
        setTotalDuration,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};
