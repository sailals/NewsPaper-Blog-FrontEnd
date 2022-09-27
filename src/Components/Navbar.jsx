import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../slices/auth";

function Navbar() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <>
      <div className="nav-wrapper">
        <div className="container">
          <div className="nav">
            <NavLink to="/" className="logo">
              <i class="bx bxs-book bx-tada"></i>
              <span class="main-color">Blog</span>
            </NavLink>
            <ul className="nav-menu" id="nav-menu">
              {auth._id ? (
                <>
                  <li>
                    <NavLink to="/write">Write</NavLink>
                  </li>
                </>
              ) : (
                <></>
              )}

              {auth._id ? (
                <>
                  <li onClick={handleClick} className="log-out">
                    LOGOUT
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <NavLink to="/signin">Sign In</NavLink>
                  </li>{" "}
                </>
              )}
              {auth._id ? (
                <>
                  <li>
                    <NavLink
                      className="navlink-img"
                      to={`/userblog/?user=${auth.name}`}
                    >
                      <img src="/Images/me.png" alt="" />
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">Log In</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
