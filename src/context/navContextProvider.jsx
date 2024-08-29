import React, { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const useNavContext = () => {
  return useContext(NavContext);
};

export default function NavProvider({ children }) {
  const [navEnabled, setNavEnabled] = useState(false);

  const toggleNav = () => {
    setNavEnabled((prev) => !prev);
  };

  return (
    <NavContext.Provider value={{ navEnabled, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
}