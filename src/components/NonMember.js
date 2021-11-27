import Button from "@mui/material/Button";
import React from "react";
import "./NonMember.css";
function NonMember() {
  const signUp = () => {};
  return (
    <div className="nonMember">
      <form>
        <h4>The order</h4>
        <input type="text" />
        <h4>The order number</h4>
        <input type="text" />
        <Button disabled>Order track</Button>
      </form>
      <div className="sign_up">
        <span>Get 15% discount when you sing up</span>
        <button onClick={signUp}>Sign up</button>
      </div>
    </div>
  );
}

export default NonMember;
