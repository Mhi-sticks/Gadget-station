import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import { logout } from "../redux/actions/userActions";
import "../App.css";

const Header = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light justify-content-center">
        <div className="container-fluid py-2">
          <NavLink
            className="navbar-brand mx-auto fw-bold"
            id="brand"
            to="/contact"
          >
            <span className="fa fa-mobile me-3"></span>GADGET STATION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item" id="nav">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <NavLink
              className="navbar-brand mx-auto fw-bold"
              id="brand1"
              to="/contact"
            >
              <span className="fa fa-mobile me-3"></span>GADGET STATION
            </NavLink>
            
            <div className="col-md-3 d-flex align-items-center justify-content-end"></div>

            {userInfo ? (
              <div className="id">
                <div class="dropdown">
                  <button
                    class="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user me-1"></i>
                    Hi, {userInfo.name}
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="id">
                  <Login />
                </div>

                <div className="id">
                  <Signup />
                </div>
              </>
            )}
            <div className="id">
              <CartBtn />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
