import axios from "axios";
import React from "react";
const API_URL="http://localhost:6555/api/auth/";
const verifyUser = (code) => {
  
    return axios.get(API_URL + "confirm/" + code).then((response) => {
      return response.data;
    });
  };
  export default verifyUser;



