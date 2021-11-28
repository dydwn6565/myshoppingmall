import React, { useState } from "react";
import "./Member.css";
import { useNavigate } from "react-router-dom";
function Member() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    alert(`${id} and ${password}`);
  };

  const loginWithGoogle = () => {};

  const signUp = () => {
    navigate("/signin");
  };

  const findId = () => {
    navigate("/findIdPw");
  };

  const findPw = () => {
    navigate("/findIdPw");
  };
  return (
    <div className="member">
      <form>
        <input
          type="text"
          placeholder="Please type the id"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Please type the password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="member_login_button" onClick={login}>
          Login{" "}
        </button>
      </form>
      <div className="login_extra_features">
        <span>autoLogin</span>
        <div className="find_id_and_pw">
          <span onClick={findId} className="find_id">
            Find Id
          </span>
          <span>|</span>
          <span onClick={findPw} className="find_pw">
            Find password
          </span>
        </div>
      </div>
      <button onClick={loginWithGoogle} className="login_with_google">
        Login with google
      </button>
      <div className="sign_up">
        <span>Get 15% discount when you sing up</span>
        <button onClick={signUp}>Sign up</button>
      </div>
    </div>
  );
}

export default Member;
