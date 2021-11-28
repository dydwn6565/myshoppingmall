import Button from "@mui/material/Button";
import React, { useState } from "react";
import FindId from "./find/FindId";
import FindPw from "./find/FindPw";
import "./FindIdPw.css";

function FindIdPw() {
  const [findIdPw, setFindIdPw] = useState("Id");
  return (
    <div className="find_id_pw">
      <h2>FInd {findIdPw}</h2>
      {/* <Button className="white" onClick={() => setFindIdPw("PW")}>
        Find Pw
      </Button>
      <Button className="white" onClick={() => setFindIdPw("Id")}>
        Find Id
      </Button> */}
      {findIdPw === "Id" ? (
        <>
          <Button onClick={() => setFindIdPw("PW")}>Find Pw</Button>
          <Button className="white" onClick={() => setFindIdPw("Id")}>
            Find Id
          </Button>
          <FindId />
        </>
      ) : (
        <>
          <Button className="white" onClick={() => setFindIdPw("PW")}>
            Find Pw
          </Button>
          <Button onClick={() => setFindIdPw("Id")}>Find Id</Button>
          <FindPw />
        </>
      )}
    </div>
  );
}

export default FindIdPw;
