import React from "react";
import "./closefriends.css";
const CloseFriends = ({ user }) => {
  return (
    <>
      <li className="sidebar__friend">
        <img
          src={user.profilePicture}
          alt="Friend Img"
          className="sidebar__friend-img"
        />
        <span className="sidebar__friend-name">{user.username}</span>
      </li>
    </>
  );
};

export default CloseFriends;
