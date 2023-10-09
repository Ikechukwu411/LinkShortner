import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Navbar.module.css";
import { CgRadioChecked } from "react-icons/cg";
import { FaQrcode } from "react-icons/fa";

const CardContainer = ({
  icon,
  name,
  description,
  description2,
  li1,
  li2,
  li3,
  li4,
}) => {
  const style = { color: "#111135", fontWeight: "bold" };
  const style2 = { color: "#111135" };
  return (
    <React.Fragment>
      <div className="column">
        <div className="card box">
          <h3 className="is-size-4 is-size-5-mobile my-3" style={style}>
            <span className="mr-2">{icon}</span>
            <span>{name}</span>
          </h3>
          <p style={style2} className="is-size-6-mobile">
            {description}
          </p>
          <hr className="divider" />
          <h3 className="is-size-5 is-size-5-mobile pb-3" style={style2}>
            {description2}
          </h3>
          <ul style={style2} className="pb-4">
            <li>
              <span className="pr-2 is-size-6-mobile">
                <CgRadioChecked color="#d44817" />
              </span>
              <span>{li1}</span>
            </li>
            <li>
              <span className="pr-2 is-size-6-mobile">
                <CgRadioChecked color="#d44817" />
              </span>
              <span>{li2}</span>
            </li>
            <li>
              <span className="pr-2 is-size-6-mobile">
                <CgRadioChecked color="#d44817" />
              </span>
              <span>{li3}</span>
            </li>
            <li>
              <span className="pr-2 is-size-6-mobile">
                <CgRadioChecked color="#d44817" />
              </span>
              <span>{li4}</span>
            </li>
          </ul>
          <Link
            to="/login"
            className={`button is-responsive ${Classes.btnheader}`}
            type="submit"
          >
            Get Started For Free
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardContainer;
