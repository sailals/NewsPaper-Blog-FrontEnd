import React from "react";
import DisneyCat from "../Components/Category/DisneyCat";
import Navbar from "./../Components/Navbar";
import LeftContent from "./../Components/LeftContent";

function DisneyCategory() {
  return (
    <>
      <div className="left-content">
        <LeftContent
          banner="/Images/disneybanner.jpg"
          logo="/Images/viewers-disney.png"
          title="Daredevil joins Marvel Multiverse"
          para="The Next Dare Devil Series will a new one, not a spin off to previous netflix adaptation"
          by="Kevin Feige"
        />
      </div>
      <div className="right-content">
        <Navbar />
        <DisneyCat />
      </div>
    </>
  );
}

export default DisneyCategory;
