import React from "react";
import { Link } from "react-router-dom";
import Classes from "../Components/Navbar.module.css";
import { FaGripfire } from "react-icons/fa";
import SignInjpeg from "../assets/signin.png";
import "../index.css";
import LoginForm from "./LoginForm";

const Login = () => {
  const style = { color: "#d44817", fontWeight: "bold" };
  return (
    <React.Fragment>
      <section
        className={`section sec ${Classes.header}`}
        style={{ color: "#111135", fontWeight: "bold" }}
      >
        <div className="pb-5">
          <Link to="/" style={style}>
            <span>
              <FaGripfire size={30} />
            </span>
            <span className="is-size-4">SnapUrl</span>
          </Link>
        </div>
        <div className="container cont ">
          <div className="card box ">
            <div className="columns">
              <div className="column">
                <img src={SignInjpeg} alt="login" />
              </div>
              <div className="column">
                <LoginForm />
              </div>
            </div>
          </div>
          <p>
            <span>Dont have any account ? </span>
            <span>
              <Link to="/signup">SignUp</Link>
            </span>
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
