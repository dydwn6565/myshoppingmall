import Button from "@mui/material/Button";
import React, { useReducer, useState } from "react";
import "./Login.css";
import Member from "./Member";
import NonMember from "./NonMember";

function Login() {
  const [member, setMember] = useState(true);
  const [state, dispatch] = useReducer();
  return (
    <div className="login">
      <h3>Login</h3>

      {member ? (
        <>
          {" "}
          <Button
            onClick={(e) => setMember(true)}
            className="member_button white"
          >
            Member
          </Button>
          <Button onClick={(e) => setMember(false)} className="nomember_button">
            Not Member
          </Button>
          <Member />
        </>
      ) : (
        <>
          <Button onClick={(e) => setMember(true)} className="member_button">
            Member
          </Button>
          <Button
            onClick={(e) => setMember(false)}
            className="nomember_button white"
          >
            Not Member
          </Button>
          <NonMember />
        </>
      )}
    </div>
  );
}

export default Login;
