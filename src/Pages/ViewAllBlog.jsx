import React from "react";
import LeftContent from "../Components/LeftContent";
import Navbar from "../Components/Navbar";
import ViewAllBlogComponent from "../Components/ViewAllBlogComponent";

function ViewAllBlog() {
  return (
    <>
      <div className="left-content">
        <LeftContent />
      </div>
      <div className="right-content">
        <Navbar />
        <ViewAllBlogComponent />
      </div>
    </>
  );
}

export default ViewAllBlog;
