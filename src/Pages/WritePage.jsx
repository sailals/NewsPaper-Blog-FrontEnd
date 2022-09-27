import React from "react";
import LeftContent from "../Components/LeftContent";
import Write from "../Components/Write";
import Navbar from "./../Components/Navbar";
import Footer from "./../Components/Footer";

function WritePage() {
  return (
    <>
      <div className="left-content">
        <LeftContent />
      </div>
      <div className="right-content">
        <Navbar />
        <Write />
      </div>
    </>
  );
}

export default WritePage;
