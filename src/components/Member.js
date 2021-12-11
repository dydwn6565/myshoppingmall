import React, { useContext, useState } from "react";
import "./Member.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "./firebase";
import { initialValues, userReducer } from "../Redux";
import { UserContext } from "../Context";

function Member() {
  const { user, setUser } = useContext(UserContext);
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const [state, dispatch] = useReducer(userReducer, initialValues);
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        setUser({
          userInfo: {
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            userId: userAuth.user.userId,
            coupon: userAuth.user.coupon,
            order: userAuth.user.order,
          },
        });
      })
      .then((e) => {
        navigate("/");
      })
      .catch((error) => alert(error));
  };

  const loginWithGoogle = () => {};

  const signUp = () => {
    navigate("/signup");
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
          type="email"
          placeholder="Please type the email"
          onChange={(e) => setEmail(e.target.value)}
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
