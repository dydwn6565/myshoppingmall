import Button from "@mui/material/Button";
import React from "react";
import FindId from "./find/FindId";
import "./FindIdPw.css";

function FindIdPw() {
  return (
    <div className="find_id_pw">
      <Button>Find Id</Button>
      <Button>Find Pw</Button>
      <FindId />
    </div>
  );
}

export default FindIdPw;
