import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Classes from "../Components/Navbar.module.css";
import { FaGripfire } from "react-icons/fa";
import SignUpForm from "./SignUpForm";
import "../index.css";
import signUp from "../assets/signUp.png";

const Signup = () => {
  const style = { color: "#d44817", fontWeight: "bold" };

  return (
    <React.Fragment>
      <section className={`section ${Classes.header}`}>
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
            <div className="columns">
              <div className="column pt-6 mt-6">
                <img src={signUp} alt="signup" />
              </div>
              <div className="column">
                <div className="has-text-centered">
                  <h1 className="is-size-3 pb-5" style={{ color: "#111135" }}>
                    Sign Up
                  </h1>
                </div>
                <SignUpForm />
              </div>
            </div>
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
