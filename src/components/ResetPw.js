import Button from "@mui/material/Button";
import React, { useRef, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Alert from "./Alert";

import "./ResetPw.css";

function ResetPw() {
  const [userEmail, setUserEmail] = useState("");
  const [alert, setAlert] = useState(false);
  const [fadeProp, setFadeProp] = useState("fade_out");
  const auth = getAuth();

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setFadeProp("fade_out");
    }, 3000);
  };
  const resetPw = () => {
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {})
      .catch((error) => {
        setFadeProp("fade_in");

        // const errorCode = error.code;
        // const errorMessage = error.message;
        showAlert();
      });
  };
  return (
    <div className="find_id_pw">
      <h2>Reset Id </h2>

      <input
        type="email"
        placeholder="type your email"
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <div>
        <Button onClick={resetPw}>Reset Pw</Button>
        {/* <h1>{userEmail}</h1> */}
        <div className="reset_pw_alert_message">
          {alert ? (
            <div className={fadeProp}>
              <Alert error="Please type different Email, can not find email" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ResetPw;
