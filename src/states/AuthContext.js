// AuthContext.js
import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem(`${process.env.REACT_APP_STORAGE_PREFIX}loggedIn`) === "true"
  );

  const pData = localStorage.getItem(`${process.env.REACT_APP_STORAGE_PREFIX}profileData`) ? JSON.parse(localStorage.getItem(`${process.env.REACT_APP_STORAGE_PREFIX}profileData`)) : {};

  const [profileData, setProfileData] = useState(pData);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, profileData, setProfileData }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
