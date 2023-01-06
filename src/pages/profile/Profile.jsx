import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile__container">
        <Sidebar />
        <div className="profile__right">
          <div className="profile__right-top">
            <div className="profile__cover">
              <img
                src="assets/post/3.jpeg"
                alt="Profile Cover Img"
                className="profile__cover-img"
              />
              <img
                src="assets/person/7.jpeg"
                alt="Profile User Img"
                className="profile__user-img"
              />
            </div>
            <div className="profile__info">
              <h4 className="profile__info-name">Zainab Memon</h4>
              <p className="profile__info-desc">Helo My Friends!</p>
            </div>
          </div>

          <div className="profile__right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
