import Button from "@mui/material/Button";
import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ErrorAlerts, SuccessAlert } from "./Alert";
import TextField from "@mui/material/TextField";
import "./ResetPw.css";

function ResetPw() {
  const [userEmail, setUserEmail] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [fadeProp, setFadeProp] = useState("fade_out");
  const auth = getAuth();
  const navigate = useNavigate();

  const showAlert = (option) => {
    if (option === "error") {
      setErrorAlert(true);
    } else {
      setSuccessAlert(true);
    }
    setTimeout(() => {
      setFadeProp("fade_out");
    }, 3000);
  };

  const resetPw = () => {
    sendPasswordResetEmail(auth, userEmail)
      .then((result) => {
        console.log("line31" + result);
        setFadeProp("fade_in");
        showAlert("success");
        console.log("hit");
      })
      .catch((error) => {
        setFadeProp("fade_in");

        const errorMessage = error.message;
        console.log(errorMessage);
        showAlert("error");
      });
  };

  const moveToLoginPage = () => {
    navigate("/login");
  };
  return (
    <div className="find_id_pw">
      <h2>Reset Password </h2>

      {/* <input
        type="email"
        placeholder="type your email"
        onChange={(e) => setUserEmail(e.target.value)}
      /> */}
      <div className="reset_password_container">
        <TextField
          required
          id="outlined-required"
          label="email"
          className="reset_password_input"
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="example@example.com"
        />
      </div>
      <div>
        <div>
          <Button color="success" onClick={resetPw}>
            Reset Password
          </Button>
        </div>
        <div>
          <Button color="success" onClick={moveToLoginPage}>
            back to login page
          </Button>
        </div>
        <div className="reset_pw_alert_message">
          {errorAlert ? (
            <div className={fadeProp}>
              {ErrorAlerts("Please type different Email, can not find email")}
            </div>
          ) : (
            ""
          )}
          {successAlert ? (
            <div className={fadeProp}>
              {SuccessAlert("Please check your email")}
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
