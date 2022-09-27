import React from "react";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <>
      <h4 className="heading top">Categories</h4>

      <div className="card grid ">
        <NavLink to={"/hbocat/?cat=HBO"}>
          <div className="box">
            <div className="img">
              <img src="/Images/card-1.jpg" alt="" />
            </div>
            <span className="category">HBO</span>
          </div>
        </NavLink>
        <NavLink to={"/disneycat/?cat=Disney"}>
          <div className="box">
            <div className="img">
              <img src="/Images/card-2.jpg" alt="" />
            </div>
            <span className="category">Disney</span>
          </div>
        </NavLink>
        <NavLink to={"/gamescat/?cat=Games"}>
          <div className="box">
            <div className="img">
              <img src="/Images/card-3.jpg" alt="" />
            </div>
            <span className="category">Games</span>
          </div>
        </NavLink>
        <NavLink to={"/netflixcat/?cat=Netflix"}>
          {" "}
          <div className="box">
            <div className="img">
              <img src="/Images/card-4.jpg" alt="" />
            </div>
            <span className="category">Netflix</span>
          </div>
        </NavLink>
        <NavLink to={"/songscat/?cat=Songs"}>
          <div className="box">
            <div className="img">
              <img src="/Images/card-5.jpg" alt="" />
            </div>
            <span className="category">Songs</span>
          </div>
        </NavLink>
        <NavLink to={"/techcat/?cat=Tech"}>
          <div className="box">
            <div className="img">
              <img src="/Images/card-6.jpg" alt="" />
            </div>
            <span className="category">Tech</span>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default Categories;
