import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa";
import { MdDatasetLinked } from "react-icons/md";
import { GiFullFolder } from "react-icons/gi";
import { PiLinkSimpleHorizontalBreakFill } from "react-icons/pi";
import { PiLinkSimpleFill } from "react-icons/pi";
import { AiFillSetting } from "react-icons/ai";
import "../../App.css";

const SideBar = () => {
  return (
    <aside
      className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile aside"
      style={{ color: "#273144" }}
    >
      <ul className="menu-list">
        <li className="pb-2">
          <NavLink to="/dashboard" activeClassName="active-link">
            <span>
              <FaHome color="#273144" />
            </span>
            <span className="pl-2">Home</span>
          </NavLink>
        </li>
        <li className="pb-2">
          <NavLink to="/link" activeClassName="active-link">
            <span className="pr-2">
              <PiLinkSimpleFill color="#273144" />
            </span>
            Link
          </NavLink>
        </li>
        <li className="pb-2">
          <NavLink to="/qrcode2">
            <span className="pr-2">
              <FaQrcode color="#273144" />
            </span>
            QRCode
          </NavLink>
        </li>
        <li className="pt-2">
          <NavLink to="/bio">
            <span className="pr-2">
              <MdDatasetLinked color="#273144" />
            </span>
            Link In Bio
          </NavLink>
        </li>
        <li className="pt-2">
          <NavLink to="/campaigns">
            <span className="pr-2">
              <GiFullFolder color="#273144" />
            </span>
            Campaigns
          </NavLink>
        </li>
        <li className="pt-3">
          <NavLink to="/custom">
            <span className="pr-2">
              <PiLinkSimpleHorizontalBreakFill color="#273144" />
            </span>
            customs
          </NavLink>
        </li>
        <hr className="navbar-divider" />
        <li>
          <NavLink to="/settings">
            <span className="pr-2">
              <AiFillSetting color="#273144" />
            </span>
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
