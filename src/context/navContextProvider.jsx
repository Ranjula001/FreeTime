import { createContext, useContext, useState } from "react";

const NavContext = createContext();

// eslint-disable-next-line react/prop-types
const NavProvider = ({ children }) => {
  const [navEnabled, setNavEnabled] = useState(false);

  return (
    <NavContext.Provider value={{ navEnabled, setNavEnabled }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;

export const NavState = () => {
  return useContext(NavContext);
};