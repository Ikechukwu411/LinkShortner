import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Resources from "./Pages/Resources";
import LinkManagement from "./Pages/LinkManagement";
import QRCode from "./Pages/QRCode";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="resources" element={<Resources />} />
          <Route path="linkmanager" element={<LinkManagement />} />
          <Route path="qrcode" element={<QRCode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
