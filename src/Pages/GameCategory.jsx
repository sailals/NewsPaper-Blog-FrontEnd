import React from "react";
import LeftContent from "../Components/LeftContent";
import Navbar from "../Components/Navbar";
import GameCat from "./../Components/Category/GameCat";

function GameCategory() {
  return (
    <>
      <div className="left-content">
        <LeftContent
          banner="/Images/gamebanner.jpg"
          logo="/Images/pslogo.png"
          title="Assassins Creed Mirage Announced"
          para="Mirrage will be prequel to the Assassins Creed Valhall, players will be controlling Basim"
          by="Ubisoft Insider"
        />
      </div>
      <div className="right-content">
        <Navbar />
        <GameCat />
      </div>
    </>
  );
}

export default GameCategory;
