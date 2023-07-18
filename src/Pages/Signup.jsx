import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Classes from "../Components/Navbar.module.css";
import { FaGripfire } from "react-icons/fa";

const Signup = () => {
  const [person, setPerson] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm: "",
  });
  const style = { color: "#d44817", fontWeight: "bold" };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(person);
    setPerson({
      ...person,
      fullname: "",
      email: "",
      password: "",
      confirm: "",
    });
  };

  return (
    <React.Fragment>
      <section className={`section sec ${Classes.header}`}>
        <div className="pb-5">
          <Link to="/" style={style}>
            <span>
              <FaGripfire size={30} />
            </span>
            <span className="is-size-4">SnapUrl</span>
          </Link>
        </div>
        <div className="container cont">
          <div className="card box">
            <div>
              <h1 className="has-text-centered">Sign Up</h1>
            </div>
            <form className="form" onSubmit={submitHandle}>
              <div className="field">
                <label htmlFor="fullname">FullName:</label>
                <input
                  type="text"
                  className="input"
                  id="fullname"
                  name="fullname"
                  value={person.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="input"
                  id="email"
                  name="email"
                  value={person.email}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="input"
                  id="password"
                  name="password"
                  value={person.password}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="confirm">Confirm-Password:</label>
                <input
                  type="password"
                  className="input"
                  id="confirm"
                  name="confirm"
                  value={person.confirm}
                  onChange={handleChange}
                />
              </div>
              <button className="button is-primary">Submit</button>
            </form>
          </div>
          <div>
            <span>Already have account ? </span>
            <span>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Signup;
