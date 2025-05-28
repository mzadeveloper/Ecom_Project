import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterBar from "./components/Footer.jsx";
import TopRoute from "./components/Routes.jsx";
import MenuBar from "./components/NavBar.jsx";
function App() {
  return (
    <div className="appCover">
      <MenuBar />
      <TopRoute />
      <FooterBar />
    </div>
  );
}

export default App;
