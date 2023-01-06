import React from "react";
import "./topbar.css";
import { Person, Chat, Notifications } from "@material-ui/icons";
import { AiOutlineSearch } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <div className="topbar__container">
        <div className="topbar__left">
          <div className="topbar__logo">ZazaSocial</div>
        </div>

        <div className="topbar__center">
          <div className="searchbar">
            <AiOutlineSearch className="search__icon" />
            <input
              className="search__input"
              placeholder="Search for friends, post or video"
            />
          </div>
        </div>

        <div className="topbar__right">
          <div className="topbar__links">
            <span className="topbar__link">
              <Link to="/home">Home</Link>
            </span>
            <span className="topbar__link">Timeline</span>
          </div>
          <div className="topbar__icons">
            <div className="topbar__icons-item">
              <Person />
              <span className="topbar__icon-badge">1</span>
            </div>
            <div className="topbar__icons-item">
              <Chat />
              <span className="topbar__icon-badge">2</span>
            </div>
            <div className="topbar__icons-item">
              <Notifications />
              <span className="topbar__icon-badge">1</span>
            </div>
          </div>
          <Link to="/profile">
            <img
              src="/assets/person/1.jpeg"
              alt="Profile Pic"
              className="topbar__profile-img"
            />
          </Link>
          <Link to="/">
            <RiLogoutCircleRLine className="logout__icon" />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Topbar;
