// import React from "react";
// import "./Signin.css";
// function Signin() {
//   return (
//     <div className="signin">
//       <form>
//         <h3>Id</h3>
//         <input type="text" placeholder="type id(5 to 11 characters" />
//         <h3>Password</h3>
//         <input
//           type="password"
//           placeholder="password( mix with number, character, special character(at least 8)"
//         />
//         <h3>Email</h3>
//         <input type="email" placeholder="email" />
//         <h3>Referal</h3>
//         <input type="text" placeholder="referal id" />
//         <input type="radio" /> <h6>agree all statements</h6>
//         <input type="radio" />
//         <h5>agree with collecting your personal info(require)</h5>
//         <input type="radio" />
//         <h5>agree with YongJu mall's use statement</h5>
//         <input type="radio" />
//         <h5>agree with receving info about marketing and ad</h5>
//         <input type="radio" />
//         <h5>are you over 14 years old?(requried)</h5>
//       </form>
//     </div>
//   );
// }

import React from "react";
import "./Signin.css";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (4 > values.firstName.length > 12) {
    errors.firstName = "Must be between 5 characters to 11";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (7 > values.password.length > 21) {
    errors.password = "Must be between 8 characters to 20";
  }

  if (!values.password) {
    errors.confirmPassword = "Required";
  } else if (7 > values.confirmPassword.length > 21) {
    errors.confirmPassword = "Must be between 8 characters to 20";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Signin = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="signin">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

        <label htmlFor="password">Last Name</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <label htmlFor="confimPassword">Confirm Password</label>
        <input
          id="confimPassword"
          name="confimPassword"
          type="confimPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confimPassword}
        />
        {formik.errors.confimPassword ? (
          <div>{formik.errors.confimPassword}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signin;
