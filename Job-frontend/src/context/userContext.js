import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  const [myToken, setMyToken] = useState("");
  return (
    <UserContext.Provider
      value={{ userData, setUserData, setMyToken, myToken }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
