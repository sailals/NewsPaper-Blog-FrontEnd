import React from "react";
import HBOCat from "../Components/Category/HBOCat";
import LeftContent from "./../Components/LeftContent";
import Navbar from "./../Components/Navbar";

function HBOCategory() {
  return (
    <>
      <div className="left-content">
        <LeftContent
          banner="/Images/dan.jpg"
          logo="/Images/HBO-logo.png"
          title="Jon Snow Sequel in Works"
          para="The Sequel will set after the events of Games of Throne Season 8"
          by="George R Martin"
        />
      </div>
      <div className="right-content">
        <Navbar />
        <HBOCat />
      </div>
    </>
  );
}

export default HBOCategory;
