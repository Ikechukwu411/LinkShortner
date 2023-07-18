import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = "!FullName is Required";
  } else if (values.fullname.length > 15) {
    errors.fullname = "Must be 15 characters or less";
  }

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
  if (!values.confirm) {
    errors.confirm = "!Confirm Password is Required";
  } else if (values.confirm.length > 20) {
    errors.confirm = "Must be same with password";
  }

  return errors;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirm: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      console.log(JSON.stringify(values, null, 2));
      resetForm({ value: "" });
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <label htmlFor="fullname" className="label">
            FullName
          </label>
          <div className="control">
            <input
              type="text"
              className="input"
              id="fullname"
              name="fullname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullname}
            />
          </div>
          {formik.errors.fullname ? (
            <div style={{ color: "red" }}>{formik.errors.fullname}</div>
          ) : null}
        </div>
        <div className="field">
          <label htmlFor="email" className="label">
            Email
          </label>
          <div className="control">
            <input
              type="text"
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
              type="text"
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
        <div className="field">
          <label htmlFor="confirm" className="label">
            Confirm-Password
          </label>
          <div className="control">
            <input
              type="text"
              className="input"
              id="confirm"
              name="confirm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirm}
            />
          </div>
          {formik.errors.confirm ? (
            <div style={{ color: "red" }}>{formik.errors.confirm}</div>
          ) : null}
        </div>
        <button className="button is-primary">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default SignUpForm;
