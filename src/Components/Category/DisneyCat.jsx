import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { url } from "../../slices/api";
import Footer from "./../Footer";

function DisneyCat() {
  const { search } = useLocation();
  const [post, setPost] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${url}/post/${search}`);
      setPost(response.data);
    }
    fetchData();
  }, [search]);

  return (
    <>
      <h4 className="heading ">Disney +</h4>
      <div className="single-cat">
        <img src="/Images/card-2.jpg" alt="" />
      </div>
      {/* All Blog Relates to game category */}
      <div className="single-blog">
        {post?.map((singlepost) => (
          <div className="box">
            <img src={singlepost?.image?.url} alt="" />
            <div className="single-blog-text">
              <span className="main-category">{singlepost?.category}</span>
              <h2>{singlepost?.title}</h2>
              <div className="name-date">
                <NavLink to={`/userblog/?user=${singlepost.username}`}>
                  {" "}
                  <span>{singlepost?.username}</span>
                </NavLink>

                <span>{new Date(singlepost?.createdAt).toDateString()}</span>
              </div>
              <div className="text-div">
                <p className="description">{singlepost.desc}</p>
              </div>
              <NavLink to={`/post/${singlepost._id}`}>
                <span>View</span>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default DisneyCat;
