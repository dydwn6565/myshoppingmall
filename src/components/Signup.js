import React, { useContext, useState } from "react";
import "./Signup.css";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { UserContext } from "../Context";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import TextField from "@mui/material/TextField";
const validate = (values) => {
  const errors = {};

  if (!values.id) {
    errors.id = "Required";
  } else if (4 >= values.id.length || values.id.length >= 12) {
    errors.id = "Must be between 5 characters to 11";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (7 > values.password.length || values.password.length > 21) {
    errors.password = "Must be between 8 characters to 20";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "confirmed Password does not match";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
const Signin = () => {
  const selectAll = () => {
    if (radioState.All) {
      setRadioState({
        All: false,
        Toa: false,
        Aypi: false,
        Aous: false,
        Aora: false,
      });
    } else if (!radioState.All) {
      setRadioState({
        All: true,
        Toa: true,
        Aypi: true,
        Aous: true,
        Aora: true,
      });
    }
  };
  const [radioState, setRadioState] = useState({
    All: false,
    Toa: false,
    Aypi: false,
    Aous: false,
    Aora: false,
  });

  const formik = useFormik({
    initialValues: {
      id: "",

      password: "",
      confirmPassword: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      register(values);
      navigate("/");
    },
  });

  // sign in

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const register = ({ email, password, id }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        setUser({
          userInfo: {
            email: userAuth.user.email,
            userLevel: "LV.4 Bronze",
            signUpDate: serverTimestamp(),
            reward: 50000,
            point: 23000,
            userId: id,
            coupon: [{ 1: "signup coupon" }],
          },
        });
        setDoc(doc(db, "users", userAuth.user.uid), {
          userInfo: {
            email: userAuth.user.email,
            userLevel: "LV.4 Bronze",
            signUpDate: serverTimestamp(),
            reward: 50000,
            point: 23000,
            userId: id,
            coupon: [{ 1: "signup coupon" }],
          },
        });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="signin">
      <h2 className="shopping_mall_name">Sign up Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form_control">
          <TextField
            required
            id="outlined-required"
            label="id"
            name="id"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.id}
          />
        </div>
        {formik.errors.id ? (
          <div className="error">{formik.errors.id}</div>
        ) : null}{" "}
        <div className="form_control">
          <TextField
            required
            id="outlined-required"
            label="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        {formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
        <div className="form_control">
          <TextField
            required
            id="outlined-required"
            label="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
        </div>
        {formik.errors.confirmPassword ? (
          <div className="error">{formik.errors.confirmPassword}</div>
        ) : null}
        <div className="form_control">
          <TextField
            required
            id="outlined-required"
            label="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        <div className="radio_button_container">
          <div className="form_control_radio_button">
            <input
              type="radio"
              name="radio_all"
              id="radio_all"
              checked={radioState.All}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onClick={selectAll}
            />
            <label htmlFor="selelct_all"> Select All</label>
          </div>
          <div className="form_control_radio_button">
            <input
              type="radio"
              name="radio_toa"
              id="radio_toa"
              checked={radioState.Toa}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onClick={() =>
                setRadioState({
                  All: radioState.All,
                  Toa: !radioState.Toa,
                  Aypi: radioState.Aypi,
                  Aous: radioState.Aous,
                  Aora: radioState.Aora,
                })
              }
            />
            <label className="term_of_agree">
              {" "}
              Term of Agreemenet 
            </label>
          </div>
          <div className="form_control_radio_button">
            <input
              type="radio"
              name="radio_aypi"
              id="radio_aypi"
              checked={radioState.Aypi}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onClick={() =>
                setRadioState({
                  All: radioState.All,
                  Toa: radioState.Toa,
                  Aypi: !radioState.Aypi,
                  Aous: radioState.Aous,
                  Aora: radioState.Aora,
                })
              }
            />
            <label htmlFor="agree_your_info">
              {" "}
              Agreement of using your personal info{" "}
              
            </label>
          </div>
          <div className="form_control_radio_button">
            <input
              type="radio"
              name="radio_aous"
              id="radio_aous"
              checked={radioState.Aous}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onClick={() =>
                setRadioState({
                  All: radioState.All,
                  Toa: radioState.Toa,
                  Aypi: radioState.Aypi,
                  Aous: !radioState.Aous,
                  Aora: radioState.Aora,
                })
              }
            />
            <label htmlFor="agree_of_using_store">
              {" "}
              Agreement of using the store 
            </label>
          </div>
          <div className="form_control_radio_button">
            <input
              type="radio"
              name="radio_aora"
              id="radio_aora"
              checked={radioState.Aora}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onClick={() =>
                setRadioState({
                  All: radioState.All,
                  Toa: radioState.Toa,
                  Aypi: radioState.Aypi,
                  Aous: radioState.Aous,
                  Aora: !radioState.Aora,
                })
              }
            />
            <label htmlFor="agree_of_receiving_ad">
              {" "}
              Agreement of receiving Ad 
            </label>
          </div>
        </div>
        {radioState.Toa && radioState.Aypi && radioState.Aora ? (
          <div className="sign_up_button">
            <Button type="submit">Submit</Button>
          </div>
        ) : (
          <div className="sign_up_button">
            <Button disabled type="submit">
              Submit
            </Button>
          </div>
        )}
      </form>{" "}
    </div>
  );
};

export default Signin;
