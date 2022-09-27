import React from "react";
import Navbar from "./../Components/Navbar";
import LeftContent from "./../Components/LeftContent";
import TechCat from "../Components/Category/TechCat";

function TechCategory() {
  return (
    <>
      <div className="left-content">
        <LeftContent
          banner="/Images/card-6.jpg"
          logo="/Images/pslogo.png"
          title="Playstation VR2 Announced"
          para="Playstation 5 price hikes, due unavaiblity of semiconductor chips"
          by="Playstation"
        />
      </div>
      <div className="right-content">
        <Navbar />
        <TechCat />
      </div>
    </>
  );
}

export default TechCategory;
