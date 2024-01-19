import { useFormik } from "formik";
// import { values } from "lodash";
import React, { useState } from "react";
function Loginpage() {
  const [active, setActive] = useState(true);
  //if login is successful then print token using reqrest.in
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(alert);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="login-form">
        <input
          className="user-name-label"
          name="userName"
          type="text"
          placeholder="USERNAME"
          value={formik.values.userName}
          onChange={formik.handleChange}
        />

        <input
          className="password-label"
          name="password"
          type="text"
          placeholder="PASSWORD"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button className="submit-btn" type="submit">
          LOGIN
        </button>
      </div>
    </form>
  );
}

export default Loginpage;
