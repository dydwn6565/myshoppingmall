import React from "react";
import Button from "@mui/material/Button";
import "../FindPw.css";
function FindpwWithEmail() {
  return (
    <div className="find_pw">
      <input type="text" placeholder="type your id" />
      <input type="email" placeholder="type email" />

      <Button>Find Id</Button>
    </div>
  );
}

export default FindpwWithEmail;
