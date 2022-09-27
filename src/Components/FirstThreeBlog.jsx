import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { url } from "./../slices/api";

function FirstThreeBlog() {
  const [post, setPost] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${url}/post/all/post`);
      setPost(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="view-all">
        <h4 className="heading">Blog</h4>
        <NavLink to="/viewall">
          <h4 className="view">View All</h4>
        </NavLink>
      </div>

      <div className="single-blog">
        {post?.map((singlepost) => (
          <div className="box">
            <img src={singlepost?.image?.url} alt="" />

            <div className="single-blog-text">
              <span className="main-category">{singlepost.category}</span>
              <h2>{singlepost.title}</h2>
              <div className="blog-user">
                <NavLink to={`/userblog/?user=${singlepost.username}`}>
                  {" "}
                  <span className="user">{singlepost?.username}</span>
                </NavLink>
                <span>{new Date(singlepost.createdAt).toDateString()}</span>
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
    </>
  );
}

export default FirstThreeBlog;
