import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";
const FirebaseContext = createContext(null);

const AuthContext = ({ children }) => {
  const allContext = useFirebase();
  return (
    <FirebaseContext.Provider value={allContext}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default AuthContext;
