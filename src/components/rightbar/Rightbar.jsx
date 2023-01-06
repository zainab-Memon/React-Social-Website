import React from "react";
import "./Rightbar.css";
import { Users } from "../../DummyData";
import Online from "../online/Online";
const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday__container">
          <img
            src="/assets/gift.png"
            alt="Birthday Icon"
            className="birthday__img"
          />
          <span className="birthday__text">
            <b>Sana Ali</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img
          src="/assets/ad.png"
          alt="Advertisement"
          className="rightbar__ad"
        />
        <h4 className="rightbar__title">Online Friends</h4>
        <ul className="online__friends-list">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar__title">User Information</h4>
        <div className="rightbar__info">
          <div className="rightbar__info-item">
            <span className="rightbar__info-key">City:</span>
            <span className="rightbar__info-value">Jamshoro</span>
          </div>

          <div className="rightbar__info-item">
            <span className="rightbar__info-key">From:</span>
            <span className="rightbar__info-value">NewYork</span>
          </div>

          <div className="rightbar__info-item">
            <span className="rightbar__info-key">Relationship:</span>
            <span className="rightbar__info-value">Single</span>
          </div>
        </div>

        <h4 className="rightbar__title">User Friends</h4>
        <div className="rightbar__followings">
          <div className="rightbar__following">
            <img
              src="assets/person/1.jpeg"
              alt="Followers Img"
              className="rightbar__following-img"
            />
            <span className="rightbar__following-name">John Carter</span>
          </div>

          <div className="rightbar__following">
            <img
              src="assets/person/2.jpeg"
              alt="Followers Img"
              className="rightbar__following-img"
            />
            <span className="rightbar__following-name">John Carter</span>
          </div>

          <div className="rightbar__following">
            <img
              src="assets/person/3.jpeg"
              alt="Followers Img"
              className="rightbar__following-img"
            />
            <span className="rightbar__following-name">John Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="assets/person/4.jpeg"
              alt="Followers Img"
              className="rightbar__following-img"
            />
            <span className="rightbar__following-name">John Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="assets/person/5.jpeg"
              alt="Followers Img"
              className="rightbar__following-img"
            />
            <span className="rightbar__following-name">John Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="assets/person/6.jpeg"
              alt="Followers Img"
              className="rightbar__following-img"
            />
            <span className="rightbar__following-name">John Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="assets/person/7.jpeg"
              alt="Followers Img"
              className="rightbar__following-img"
            />
            <span className="rightbar__following-name">John Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="assets/person/8.jpeg"
              alt="Followers Img"
              className="rightbar__following-img"
            />
            <span className="rightbar__following-name">John Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="assets/person/9.jpeg"
              alt="Followers Img"
              className="rightbar__following-img"
            />
            <span className="rightbar__following-name">John Carter</span>
          </div>
          <div className="rightbar__following">
            <img
              src="assets/person/10.jpeg"
              alt="Followers Img"
              className="rightbar__following-img"
            />
            <span className="rightbar__following-name">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar__container">
      <div className="rightbar__wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
