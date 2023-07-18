import React, { useState } from "react";
import { Link } from "react-router-dom";
import Classes from "../Components/Navbar.module.css";
import { FaGripfire } from "react-icons/fa";
import "../index.css";

const Login = () => {
  const style = { color: "#d44817", fontWeight: "bold" };

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password);
    setPassword("");
    setUsername("");
  };

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
            <form
              onSubmit={handleSubmit}
              style={{ color: "#111135", fontWeight: "bold" }}
            >
              <div className="field">
                <label htmlFor="username">UserName :</label>
                <input
                  type="text"
                  className="input"
                  id="username"
                  value={userName}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="field">
                <label htmlFor="password">Password :</label>
                <input
                  type="password"
                  className="input"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button className="button is-primary" type="submit">
                Login
              </button>
            </form>
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
