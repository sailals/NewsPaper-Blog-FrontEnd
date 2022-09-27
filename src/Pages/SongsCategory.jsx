import React from "react";
import Navbar from "./../Components/Navbar";
import LeftContent from "./../Components/LeftContent";
import SongsCat from "../Components/Category/SongsCat";

function SongsCategory() {
  return (
    <>
      <div className="left-content">
        <LeftContent banner="/Images/songsbanner.jpg" />
      </div>
      <div className="right-content">
        <Navbar />
        <SongsCat />
      </div>
    </>
  );
}

export default SongsCategory;
