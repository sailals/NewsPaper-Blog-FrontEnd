import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function RecentBlog() {
  const options = {
    items: 1,
    dots: true,
    margin: 15,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
  };
  return (
    <>
      <div className="slide">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="box">
            <div className="img">
              <img src="/Images/slide-1.jpg" alt="" />
            </div>
            <div className="slide-text">
              <span className="main-category">Netflix</span>
              <h2>Squid Game Season 2 Announced</h2>
              <p>
                Squid Game’s domination didn’t end after it turned into
                Netflix’s most-watched series ever
              </p>
            </div>
          </div>

          <div className="box">
            <div className="img">
              <img src="/Images/slide-2.jpg" alt="" />
            </div>
            <div className="slide-text">
              <span className="main-category">HBO</span>
              <h2>House Of the Dragon</h2>
              <p>
                Will Daemon Targaryen Sit on Iron Throne? The Fight for the iron
                throne continues...
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src="/Images/slide-3.jpg" alt="" />
            </div>
            <div className="slide-text">
              <span className="main-category">Disney</span>
              <h2>DareDevil</h2>
              <p>
                Daredevil renewed will be a completely new series from the
                netflix adaptation, KING PIN Returns ...
              </p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
}

export default RecentBlog;
