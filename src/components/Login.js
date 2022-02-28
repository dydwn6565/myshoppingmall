import Button from "@mui/material/Button";
import React, { useContext, useState } from "react";

import "./Login.css";
import Member from "./Member";

function Login() {
  return (
    <div className="login_background">
      <div className="login">
        <h2>Login</h2>

        <Member />
      </div>
    </div>
  );
}

export default Login;
