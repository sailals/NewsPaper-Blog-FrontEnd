import React from "react";
import NetflixCat from "../Components/Category/NetflixCat";
import LeftContent from "./../Components/LeftContent";
import Navbar from "./../Components/Navbar";

function NetflixCategory() {
  return (
    <>
      <div className="left-content">
        <LeftContent
          banner="/Images/netflixbanner.jpg"
          title="Shadow And Bone Season S02 Announced"
          para="The new clip also features plenty of footage of fan-favorite characters the Crows"
          by="IGN"
        />
      </div>
      <div className="right-content">
        <Navbar />
        <NetflixCat />
      </div>
    </>
  );
}

export default NetflixCategory;
