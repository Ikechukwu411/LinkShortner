import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "!Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "!Password is Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  return errors;
};

const LoginForm = () => {
  const { logIn, userId } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(userId);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      // console.log(values);
      resetForm({ values: "" });
      try {
        logIn(values.email, values.password).then(() => {
          navigate("/dashboard");
        });
        toast.success("Login successful", {
          autoClose: 3000,
        });
      } catch (error) {
        toast.error("Check Your Password.");
        console.log(error);
      }
    },
  });

  return (
    <React.Fragment>
      <ToastContainer />
      <form onSubmit={formik.handleSubmit}>
        <div
          className="has-text-centered is-size-4-desktop is-size-5-mobile pb-5"
          style={{ color: "#111135", fontWeight: "bold" }}
        >
          <h1>Welcome Back</h1>
        </div>
        <div className="field">
          <label htmlFor="email" className="label">
            Email
          </label>
          <div className="control">
            <input
              type="email"
              className="input"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="field">
          <label htmlFor="password" className="label">
            Password
          </label>
          <div className="control">
            <input
              type="password"
              className="input"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          {formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>
        <button className="button is-primary" type="submit">
          Sign In
        </button>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
