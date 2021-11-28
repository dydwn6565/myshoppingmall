import Button from "@mui/material/Button";
import React, { useState } from "react";
import "./FindPw.css";
import FindpwWithCP from "./findpw/FindpwWithCP";
import FindpwWithEmail from "./findpw/FindpwWithEmail";
function FindPw() {
  const [findIdMethod, setFindIdMethod] = useState("cp");
  return (
    <div className="find_pw">
      <input
        type="radio"
        name="find_pw"
        id="find_id_cell_phone"
        onClick={() => setFindIdMethod("cp")}
      />
      <label htmlFor="find_id_cell_phone">Cell Phone</label>
      <input
        type="radio"
        name="find_pw"
        id="find_id_email"
        onClick={() => setFindIdMethod("email")}
      />
      <label htmlFor="find_id_email">Email</label>
      {/* <input type="text" placeholder="type Id" />
      <input type="text" placeholder="type name" />
      <div className="verification">
        <input type="number" placeholde="type your phone number without (-)" />
        <button className="verification_bt">Request verification</button>
      </div>
      <Button>Find Id</Button> */}
      {findIdMethod === "cp" ? <FindpwWithCP /> : <FindpwWithEmail />}
    </div>
  );
}

export default FindPw;
