import DashboardNav from "./DashboardNav";
import SideBar from "./SideBar";
import "../../App.css";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../Context/AuthContext";
import { db } from "../../../Firebase/firebaseconfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const Settings = () => {
  const { currentUser } = useContext(AuthContext);
  const [profile, setProfile] = useState("");
  const [userName, setUserName] = useState("");
  const [IsInputFocused, setIsInputFocused] = useState(false);
  const [updateProfile, setProfileName] = useState("");

  const userId2 = currentUser.uid;

  useEffect(() => {
    fetchuserData();
  }, []);

  const fetchuserData = async () => {
    const data = await getDoc(doc(db, "users", userId2));
    // console.log(data);
    if (data.exists()) {
      // setUserName(data.data().name);
      setProfile(data.data().name);
      // console.log(data);
    } else {
      console.log("error");
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };
  const newPlaceholder = IsInputFocused ? "Update Name" : userName;

  //

  useEffect(() => {
    console.log("hvghvg");
  }, [userId2]);

  // const updateUserProfile = async (e) => {
  //   e.preventDefault();
  //   const userCollection = doc(db, "users", userId2);
  //   await updateDoc(userCollection, {
  //     name: updateProfile,
  //   });
  //   setProfileName("");
  // };
  const updateUserProfile = async (e) => {
    e.preventDefault();
    const userCollection = doc(db, "users", userId2);
    const updatedName = updateProfile; // Assuming 'updateProfile' is the username you want to log
    console.log(`Updating profile for user: ${updatedName}`);
    setProfile(updatedName);
    await updateDoc(userCollection, {
      name: updatedName,
    });
    setProfileName("");
  };

  console.log(userName);

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
            <form onSubmit={updateUserProfile}>
              <label htmlFor="name has-text-weight-bold mb-2">
                Display Name: {profile}
              </label>
              <input
                className="input mt-2"
                type="text"
                id="name"
                onChange={(e) => {
                  setProfileName(e.target.value);
                }}
                placeholder={newPlaceholder}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                value={updateProfile}
              />
              <button className="button is-info mt-5">
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
