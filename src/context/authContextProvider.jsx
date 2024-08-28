import { createContext, useContext, useState } from "react";
//import { getCurrentUser } from "../services/authService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getCurrentUser());

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const AuthState = () => {
  return useContext(AuthContext);
};