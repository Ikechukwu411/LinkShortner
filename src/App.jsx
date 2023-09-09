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
import Custom from "./Pages/Dashboard/Custom";
import AuthContext from "../Context/AuthContext";
import { useContext } from "react";
import Settings from "./Pages/Dashboard/Settings";
import ProtectedRoutes from "../Firebase/ProtectedRoutes";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        {!currentUser && (
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="resources" element={<Resources />} />
            <Route path="linkmanager" element={<LinkManagement />} />
            <Route path="qrcode" element={<QRCode />} />
          </Route>
        )}
        {!currentUser && <Route path="/login" element={<Login />} />}
        {!currentUser && <Route path="/signup" element={<Signup />} />}
        <ProtectedRoutes path="/dashboard" element={<Dashboard />} />
        {currentUser && <Route path="/link" element={<Links />} />}
        {currentUser && <Route path="/qrcode2" element={<QRCCode />} />}
        {currentUser && <Route path="/bio" element={<Bio />} />}
        {currentUser && <Route path="/campaigns" element={<Bio />} />}
        {currentUser && <Route path="/custom" element={<Custom />} />}
        {currentUser && <Route path="/settings" element={<Settings />} />}
        {/* {currentUser && (
          <Route path="*" element={<Navigate to="/dashboard" />} />
        )} */}
        {!currentUser && <Route path="*" element={<Navigate to="/" />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
