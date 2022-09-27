import React from "react";

function LeftContent({ banner, logo, title, by, para }) {
  return (
    <>
      <div className="content">
        <div className="logo">
          <img
            src={logo ? logo : "/Images/logo.png"}
            alt=""
            className="logo-1"
          />
          <img src="/Images/logo.png" alt="" className="logo-2" hidden />
        </div>
        <div className="home-img">
          <img src={banner ? banner : "/Images/blog5.jpg"} alt="" />
        </div>
        <div className="text">
          <h1>{title ? title : " Witcher S03 Comming In 2023"} </h1>
          <p>
            {para
              ? para
              : `Evil is evil. Lesser, greater, middling… Makes no difference. The
            degree is arbitrary. The definition’s blurred. If I’m to choose
            between one evil and another… I’d rather not choose at all.`}
          </p>

          <span>By {by ? by : "By Geralt of Rivia"}</span>
        </div>
        <div className="bottom">
          <div className=" text2">
            <h1>DESTINY</h1>
            <p>
              <span>"</span>People linked by destiny will always find each other
              <span>"</span>
            </p>
            <span>By Geralt of Rivia</span>
          </div>
          <div className="qrcode">
            <img src="/images/qrcode.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftContent;
