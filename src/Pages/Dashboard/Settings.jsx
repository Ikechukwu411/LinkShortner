import DashboardNav from "./DashboardNav";
import SideBar from "./SideBar";
import "../../App.css";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";

const Settings = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div id="app">
      <DashboardNav />
      <section className="main-content columns is-fullheight">
        <SideBar />
        <div
          className="section container column is-10"
          style={{ background: "#fff" }}
        >
          <div style={{ color: "#273144" }}>
            <p className="is-size-3 mb-2 is-family-primary is-bold">Profile</p>
            <p className="mb-3 has-text-weight-bold is-size-5">Preferences</p>
            <form>
              <label htmlFor="name has-text-weight-bold mb-2">
                Display Name:{" "}
              </label>
              <input
                className="input mt-2"
                type="text"
                id="name"
                placeholder="Your Name"
              />
              <button className="button is-primary mt-5" disabled>
                Update Display Name
              </button>
            </form>

            {/* EMAIL ADDRESS */}
            <form>
              <p className="mb-3 has-text-weight-bold is-size-5 mt-6">
                Email Addresses
              </p>
              <p>
                Select or add a new email address to receive notifications. Only
                verified emails can be designated as the primary email address,
                which is used to log in.
              </p>
              <table className="table">
                <tr>
                  <th>Email Address</th>
                  <th>Status</th>
                  <th>Primary</th>
                </tr>
                <tr>
                  <td>{currentUser.email}</td>
                  <td>verified</td>
                  <td>
                    <p>success</p>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
