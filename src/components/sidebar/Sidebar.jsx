import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import CloseFriends from "../closefriends/CloseFriends";
import { Users } from "../../DummyData";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar__container">
        <div className="sidebar__wrapper">
          <ul className="sidebar__list">
            <li className="sidebar__listitem">
              <RssFeed className="sidebar__listitem-icon" />
              <span className="sidebar__listitem-text">Feed</span>
            </li>

            <li className="sidebar__listitem">
              <Chat className="sidebar__listitem-icon" />
              <span className="sidebar__listitem-text">Chats</span>
            </li>

            <li className="sidebar__listitem">
              <PlayCircleFilledOutlined className="sidebar__listitem-icon" />
              <span className="sidebar__listitem-text">Videos</span>
            </li>

            <li className="sidebar__listitem">
              <Group className="sidebar__listitem-icon" />
              <span className="sidebar__listitem-text">Groups</span>
            </li>

            <li className="sidebar__listitem">
              <Bookmark className="sidebar__listitem-icon" />
              <span className="sidebar__listitem-text">Bookmarks</span>
            </li>

            <li className="sidebar__listitem">
              <HelpOutline className="sidebar__listitem-icon" />
              <span className="sidebar__listitem-text">Questions</span>
            </li>

            <li className="sidebar__listitem">
              <WorkOutline className="sidebar__listitem-icon" />
              <span className="sidebar__listitem-text">Jobs</span>
            </li>

            <li className="sidebar__listitem">
              <Event className="sidebar__listitem-icon" />
              <span className="sidebar__listitem-text">Events</span>
            </li>

            <li className="sidebar__listitem">
              <School className="sidebar__listitem-icon" />
              <span className="sidebar__listitem-text">Courses</span>
            </li>
          </ul>

          <button className="sidebar__button">Show More</button>

          <hr className="sidebar__hr" />

          <ul className="sidebar__friendlist">
            {Users.map((u) => (
              <CloseFriends key={Users.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
