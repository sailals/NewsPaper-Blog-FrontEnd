import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { url } from "../../slices/api";
import { useSelector } from "react-redux";

function UserBlog() {
  const { search } = useLocation();

  const [post, setPost] = useState();

  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (!auth._id) {
  //       navigate("/");
  //     }
  //   }, [auth._id]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${url}/post/${search}`);
      setPost(response.data);
    }
    fetchData();
  }, [search]);

  return (
    <>
      <div className="user-blog">
        <img src="/Images/me.png" alt="" />
        <span>{post ? post[0]?.username : "user"}</span>
      </div>

      <div className="view-all">
        <h4 className="heading">User Blog</h4>
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
                  <span>{singlepost?.username}</span>
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

export default UserBlog;
