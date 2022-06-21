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
import Button from "@mui/material/Button";
import  IconButton  from "@material-ui/core/IconButton";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";

import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

function Member() {
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerts, setAlerts] = useState("");
  const navigate = useNavigate();
  const [userLogin] = useAuthState(auth);

  const login = (e) => {
    e.preventDefault();
    try {
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
            .catch((error) => (
              <>
                {setAlerts(error.message)} {handleClickOpen()}
              </>
            ));
        })
        .catch((error) => (
          <>
            {setAlerts(
              "Email/Password is invalid Please try different Email/Password"
            )}{" "}
            {handleClickOpen()}
          </>
        ));
    } catch (error) {
      alert(error);
    }
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {!userLogin ? (
        <div className="member">
          <form>
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <TextField
                id="input-with-icon-textfield"
                label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                id="input-with-icon-textfield"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Box>

            <Button
              variant="contained"
              className="member_login_button"
              onClick={login}
            >
              Login{" "}
            </Button>
          </form>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {alerts}
              </DialogContentText>
            </DialogContent>
          </Dialog>

          <div className="login_extra_features">
            <span onClick={resetPw} className="find_pw">
              Reset password
            </span>
          </div>
          <div className="login_with_google">
            <Button onClick={loginWithGoogle}>Login with google</Button>
          </div>
          <div className="sign_up">
            <span>Get 15% discount when you sign up</span>

            <IconButton
              onClick={signUp}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <GroupAddIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
}

export default Member;
