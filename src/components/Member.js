import React from "react";
import "./Member.css";
function Member() {
  const login = (e) => {
    e.preventDefault();
  };

  const loginWithGoogle = () => {};

  const signUp = () => {};

  const findId = () => {};

  const findPw = () => {};
  return (
    <div className="member">
      <form>
        <input type="text" placeholder="Please type the id" />
        <input type="text" placeholder="Please type the password" />
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
