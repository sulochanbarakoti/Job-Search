// components/RequireAuth.js
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const RequireAuth = () => {
  //   const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // axios
    //   .get("api/v1/check-auth", { withCredentials: true })
    //   .then((response) => {
    //     console.log(response.message);
    //     setAuthenticated(true);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

  return authenticated;
};

export default RequireAuth;
