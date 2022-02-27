import React, { useState } from "react";

export const InfoContext = React.createContext({
  totalDistance: 0,
  totalDuration: 0,
  setTotalDistance: () => {},
  setTotalDirection: () => {},
});

export const InfoProvider = ({ children }) => {
  // Information for the whole app
  const [totalDistance, setTotalDistance] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

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
