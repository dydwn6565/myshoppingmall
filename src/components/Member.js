import React, { useContext, useEffect, useState } from "react";
import "./Member.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "./firebase";
import { UserContext } from "../Context";
import { getDoc, doc, collection } from "firebase/firestore";
// import { initialValues, userReducer } from "../Redux";
// import { getDialogContentUtilityClass } from "@mui/material";

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
        // console.log(userAuth.user);

        getDoc(doc(db, "users", userAuth.user.uid))
          .then((result) => {
            console.log(result.data().userInfo);
            setUser({
              userInfo: {
                email: result.data().userInfo.email,

                userId: result.data().userInfo.userId,
                coupon: result.data().userInfo.coupon,
                order: result.data().userInfo.order,
                userLevel: result.data().userInfo.userLevel,
                signUpDate: result.data().userInfo.signupDate,
                reward: result.data().userInfo.reward,
                point: result.data().userInfo.point,
              },
            });
          })
          .then((e) => {
            navigate("/");
          })
          .catch((error) => alert(error));
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
