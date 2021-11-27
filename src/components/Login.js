import Button from "@mui/material/Button";
import React from "react";
import "./Login.css";
import Member from "./Member";

function Login() {
  return (
    <div className="login">
      <h3>Login</h3>
      <Button className="button gray">Member</Button>
      <Button className="button">Not Member</Button>
      <Member />
    </div>
  );
}

export default Login;
