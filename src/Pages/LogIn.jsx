import React, { useEffect } from "react";
import LeftContent from "../Components/LeftContent";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../slices/auth";

function LogIn() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <>
      <div className="left-content">
        <LeftContent />
      </div>
      <div className="right-content back">
        <Navbar />
        <div className="form-container">
          <div className="form">
            <input
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
              type="text"
              className="custom-input"
              placeholder="Email ID"
            />
            <input
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              type="password"
              name=""
              id=""
              className="custom-input"
              placeholder="Password"
            />
            <button onClick={handelSubmit} className="btn ">
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
