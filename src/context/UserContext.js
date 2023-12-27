import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userDetail = localStorage.getItem("user");
  const [user, setUser] = useState(
    userDetail ? JSON.parse(userDetail) : null
  );
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
