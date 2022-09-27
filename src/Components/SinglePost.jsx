import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { url } from "../slices/api";

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${url}/post/${path}`);
      setPost(response.data);
    }
    fetchData();
  }, [path]);

  return (
    <>
      <h4 className="heading ">Blog</h4>
      <div className="single-cat">
        <img src={post?.image?.url} alt="" />
      </div>
      <div className="single-blog-page single">
        <span className="main-category">{post?.category}</span>
        <h2>{post?.title}</h2>
        <div className="name-date">
          <span>{post?.username}</span>
          <span>{new Date(post?.createdAt).toDateString()}</span>
        </div>

        <p>{post?.desc}</p>
      </div>
    </>
  );
}

export default SinglePost;
