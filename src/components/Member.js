import React, { useContext, useState } from "react";
import "./Member.css";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import { auth, db } from "./firebase";
import { UserContext } from "../Context";
import { getDoc, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Member() {
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userLogin] = useAuthState(auth);

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        getDoc(doc(db, "users", userAuth.user.uid))
          .then((result) => {
            console.log(result.data().userInfo);
            setUser({
              userInfo: {
                email: result.data().userInfo.email,

                userId: result.data().userInfo.userId,
                coupon: result.data().userInfo.coupon,

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

  const signInWithGoogle = async (googleProvider) => {
    try {
      await signInWithPopup(auth, googleProvider)
        .then((user) => {
          getDoc(doc(db, "users", user.user.uid))
            .then((docs) => {
              console.log(docs.data());
              if (docs.data() === undefined) {
                setUser({
                  userInfo: {
                    email: user.user.email,
                    userLevel: "LV.4 Bronze",
                    signUpDate: serverTimestamp(),
                    reward: 50000,
                    point: 23000,
                    userId: user.user.email,
                    coupon: [{ 1: "signup coupon" }],
                  },
                });

                setDoc(doc(db, "users", user.user.uid), {
                  userInfo: {
                    email: user.user.email,
                    userLevel: "LV.4 Bronze",
                    signUpDate: serverTimestamp(),
                    reward: 50000,
                    point: 23000,
                    userId: user.user.email,
                    coupon: [{ 1: "signup coupon" }],
                  },
                });
              } else {
                setUser({
                  userInfo: {
                    email: docs.data().email,
                    userLevel: docs.data().userLevel,
                    signUpDate: docs.data().signUpDate,
                    reward: docs.data().reward,
                    point: docs.data().point,
                    userId: docs.data().email,
                    coupon: docs.data().coupon,
                  },
                });
              }
            })
            .catch((error) => alert(error));
        })
        .catch((error) => alert(error));
    } catch (err) {
      alert(err.message);
    }
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithGoogle(googleProvider);
  };

  const signUp = () => {
    navigate("/signup");
  };

  const resetPw = () => {
    navigate("/login/resetPw");
  };
  return (
    <>
      {!userLogin ? (
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
            <span onClick={resetPw} className="find_pw">
              Reset password
            </span>
          </div>
          <button onClick={loginWithGoogle} className="login_with_google">
            Login with google
          </button>
          <div className="sign_up">
            <span>Get 15% discount when you sign up</span>
            <button onClick={signUp}>Sign up</button>
          </div>
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
}

export default Member;
