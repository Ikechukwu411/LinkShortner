import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bulma/css/bulma.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Resources from "./Pages/Resources";
import LinkManagement from "./Pages/LinkManagement";
import QRCode from "./Pages/QRCode";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Links from "./Pages/Dashboard/Links";
import QRCCode from "./Pages/Dashboard/QRCCode";
import Bio from "./Pages/Dashboard/Bio";
import Campaigns from "./Pages/Dashboard/Campaigns";
import Custom from "./Pages/Dashboard/Custom";
import AuthContext from "../Context/AuthContext";
import { useContext } from "react";
import Settings from "./Pages/Dashboard/Settings";
import CreateNew from "./Pages/Dashboard/CreateNew";
// import ProtectedRoutes from "../Firebase/ProtectedRoutes";
import "../src/App.css";
// import ClipLoader from "react-spinners/ClipLoader";
import DotLoader from "react-spinners/DotLoader";
import React, { useState, useEffect } from "react";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const [Loading, setLoading] = useState(false);

  const override = {
    display: "block",
    margin: "10rem auto",
    borderColor: "red",
  };

  // Define routes for authenticated users
  const authenticatedRoutes = (
    <>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/link" element={<Links />} />
      <Route path="/qrcode2" element={<QRCCode />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/custom" element={<Custom />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/createnew" element={<CreateNew />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </>
  );

  // Define routes for non-authenticated users
  const nonAuthenticatedRoutes = (
    <>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="resources" element={<Resources />} />
        <Route path="linkmanager" element={<LinkManagement />} />
        <Route path="qrcode" element={<QRCode />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/" />} />
    </>
  );

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <React.Fragment className="load">
      {Loading ? (
        <DotLoader
          className="load"
          color={"#D06F23"}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
          cssOverride={override}
        />
      ) : (
        <div>
          <BrowserRouter>
            <Routes>
              {currentUser ? authenticatedRoutes : nonAuthenticatedRoutes}
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </React.Fragment>
  );
};

export default App;
