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
      <section className={`section`}>
        <div className="pb-5">
          <Link to="/" style={style}>
            <span>
              <FaGripfire size={30} />
            </span>
            <span className="is-size-4">SnapUrl</span>
          </Link>
        </div>
        <div className="container is-centered">
          <div className="columns is-centered">
            <div className="column">
              <div className="box">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128">
                      <img src={SignInjpeg} alt="login" width={200} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <LoginForm />
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <img src={SignInjpeg} alt="login" className="is-desktop" />
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
