import React from "react";
import "./Member.css";
function Member() {
  const login = (e) => {
    e.preventDefault();
  };
  return (
    <div className="member">
      <form>
        <input type="text" placeholder="Please type the id" />
        <input type="text" placeholder="Please type the password" />
        <button onClick={login}>Login </button>
      </form>
      <div className="login_extra_features">
        <p>autoLogin</p>
        <p className="find_id">Find Id</p>
        <p className="find_pw">Find password</p>
      </div>
    </div>
  );
}

export default Member;
