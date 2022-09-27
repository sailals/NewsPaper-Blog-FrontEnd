import React from "react";
import Navbar from "./Navbar";
import RecentBlog from "./RecentBlog";
import Categories from "./Categories";
import FirstThreeBlog from "./FirstThreeBlog";
import Footer from "./Footer";
import LeftContent from "./LeftContent";

function Main() {
  return (
    <>
      <section className="home">
        <div className="left-content">
          <LeftContent />
        </div>
        <div className="right-content">
          <Navbar />
          <RecentBlog />
          <Categories />
          <FirstThreeBlog />
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Main;
