import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { url } from "../slices/api";
import { allBlogFetch } from "../slices/post";

function ViewAllBlogComponent() {
  const { search } = useLocation();
  console.log(search);

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
      <div className="view-all">
        <h4 className="heading">Blog</h4>
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
              <p className="description">{singlepost.desc}</p>
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

export default ViewAllBlogComponent;
