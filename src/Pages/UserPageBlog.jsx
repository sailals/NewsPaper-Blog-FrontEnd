import React from "react";
import UserBlog from "../Components/Category/UserBlog";
import LeftContent from "../Components/LeftContent";
import Navbar from "../Components/Navbar";

function UserPageBlog() {
  return (
    <>
      <div className="left-content">
        <LeftContent banner="/Images/netflixbanner.jpg" />
      </div>
      <div className="right-content">
        <Navbar />
        <UserBlog />
      </div>
    </>
  );
}

export default UserPageBlog;
