import React from "react";
import Button from "@mui/material/Button";
import "../FindPw.css";
function FindpwWithCP() {
  return (
    <div className="find_pw">
      <input type="text" placeholder="type your id" />
      <input type="text" placeholder="name" />
      <div className="verification">
        <input type="number" />
        <button className="verification_bt">Request verification</button>
      </div>
      <Button>Find Id</Button>
    </div>
  );
}

export default FindpwWithCP;
