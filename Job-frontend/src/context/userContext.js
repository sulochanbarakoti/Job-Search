import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  const [myToken, setMyToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        setMyToken,
        myToken,
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
