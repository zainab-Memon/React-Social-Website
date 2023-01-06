import React from "react";
import "./online.css";
const Online = ({ user }) => {
  return (
    <>
      <li className="rightbar__friend">
        <div className="rightbar__profileimg-container">
          <img
            src={user.profilePicture}
            alt="Online Friend"
            className="rightbar__profile-img"
          />
          <span className="rightbar__onlinefriend-status"></span>
        </div>
        <span className="rightbar__onlinefriend-username">{user.username}</span>
      </li>
    </>
  );
};

export default Online;
