import React from "react";
import SinglePost from "../Components/SinglePost";
import Navbar from "./../Components/Navbar";
import LeftContent from "./../Components/LeftContent";

function SingleBlogPage() {
  return (
    <>
      <div className="left-content">
        <LeftContent />
      </div>
      <div className="right-content">
        <Navbar />
        <SinglePost />
      </div>
    </>
  );
}

export default SingleBlogPage;
