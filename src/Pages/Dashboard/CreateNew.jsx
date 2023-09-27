import DashboardNav from "./DashboardNav";
import SideBar from "./SideBar";
import { useState, useContext, useEffect } from "react";
import { db } from "../../../Firebase/firebaseconfig";
import { getDoc, doc, collection, addDoc } from "firebase/firestore";
import AuthContext from "../../../Context/AuthContext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../../App.css";
// import axios from "axios";

const CreateNew = () => {
  const { currentUser } = useContext(AuthContext);
  const [longurl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [title, setTitle] = useState("");
  const [linkId, setLinkId] = useState();
  const [final, setFinal] = useState();

  useEffect(() => {
    getShortneredLink();
  }, [linkId]);

  const handleChangeLong = (e) => {
    setLongUrl(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${longurl}`
      );
      const data = await response.json();
      console.log(data.result.full_short_link);
      setShortUrl(data.result.full_short_link);

      const newItemRef = await addDoc(collection(db, "Emma"), {
        name: title,
        shortened_Link: shortUrl,
      });

      // console.log(newItemRef.id);
      setLinkId(newItemRef.id);
    } catch (error) {
      console.log(error);
    }
    // console.log(title, longurl);
    console.log(currentUser);
    setLongUrl("");
    setTitle("");
  };

  const getShortneredLink = async () => {
    const data = await getDoc(doc(db, "Emma", linkId));
    if (data.exists()) {
      setFinal(data.data().shortened_Link);
      console.log(data.data().name, data.data().shortened_Link);
    }
  };

  return (
    <div id="app">
      <DashboardNav />
      <section className="main-content columns is-fullheight">
        <SideBar />
        <div className="container column is-10" style={{ background: "#fff" }}>
          <div className="section">
            <div className="container" style={{ width: "70%" }}>
              {/* {!isSubmitted && ( */}
              <form className="form" onSubmit={handlesubmit}>
                <div>
                  <p className="title mb-3" style={{ color: "#273144" }}>
                    Create New
                  </p>
                  <label htmlFor="destination">Destination</label>
                  <input
                    type="text"
                    className="input"
                    id="destination"
                    placeholder="https://anylink.com"
                    value={longurl}
                    onChange={handleChangeLong}
                  />
                  <p className="my-5">You can create 8 more link</p>
                  <label htmlFor="option">Title (optional)</label>
                  <input
                    type="text"
                    className="input"
                    id="option"
                    placeholder="https://anylink.com"
                    value={title}
                    onChange={handleChangeTitle}
                  />
                </div>
                <button className="button my-3 is-info "> Create</button>
              </form>
              <div className="container box">
                <div className="shortener__viewShot">
                  {final}
                  <CopyToClipboard text={final}>
                    <button
                      className="button is-info"
                      onClick={() => alert("The URL has been copied")}
                    >
                      copy
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>

            {/* <div className="card">
              <div className="card-header">
                <p className="card-header-title">Header</p>
              </div>
              <div className="card-content">
                <div className="content">Content</div>
              </div>
            </div>
            <br /> */}

            {/* Repeat the card sections as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateNew;
