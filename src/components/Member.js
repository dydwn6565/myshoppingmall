import React, { useContext, useEffect, useState } from "react";
import "./Member.css";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithGoogle,
  signInWithPopup,
  updateProfile,
} from "@firebase/auth";
import { auth, db } from "./firebase";
import { UserContext } from "../Context";
import {
  getDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";

function Member() {
  const { user, setUser } = useContext(UserContext);
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userLogin, loading] = useAuthState(auth);

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
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;

      // const q = query(collection(db, "users"), where("uid", "==", user.uid));

      const docs = await getDoc(doc(db, "users", user.uid));

      const userInfo = docs.data().userInfo;
      if (userInfo === undefined) {
        setUser({
          userInfo: {
            email: user.email,
            userLevel: "LV.4 Bronze",
            signUpDate: serverTimestamp(),
            reward: 50000,
            point: 23000,
            userId: user.email,
            coupon: { 1: "signup coupon" },
          },
        });

        setDoc(doc(db, "users", user.uid), {
          userInfo: {
            email: user.email,
            userLevel: "LV.4 Bronze",
            signUpDate: serverTimestamp(),
            reward: 50000,
            point: 23000,
            userId: user.email,
            coupon: { 1: "signup coupon" },
          },
        });
      } else {
        setUser({
          userInfo: {
            email: userInfo.email,
            userLevel: userInfo.userLevel,
            signUpDate: userInfo.signUpDate,
            reward: userInfo.reward,
            point: userInfo.point,
            userId: userInfo.email,
            coupon: userInfo.coupon,
          },
        });
      }
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

  const findId = () => {
    navigate("/findIdPw");
  };

  const findPw = () => {
    navigate("/findIdPw");
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
      ) : (
        navigate("/")
      )}
    </>
  );
}

export default Member;
