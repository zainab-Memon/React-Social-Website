import React from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
const Share = () => {
  return (
    <>
      <div className="share__container">
        <div className="share__wrapper">
          <div className="share__top">
            <img
              className="share__profileimg"
              src="/assets/person/1.jpeg"
              alt="Share Img"
            />
            <input
              placeholder="What's in your mind?"
              className="share__input"
            />
          </div>
          <hr className="share__hr" />

          <div className="share__bottom">
            <div className="share__options">
              <div className="share__option">
                <PermMedia htmlColor="tomato" className="share__option-icon" />
                <span className="share__option-text">Photo or Video</span>
              </div>

              <div className="share__option">
                <Label htmlColor="blue" className="share__option-icon" />
                <span className="share__option-text">Tag</span>
              </div>

              <div className="share__option">
                <Room htmlColor="green" className="share__option-icon" />
                <span className="share__option-text">Location</span>
              </div>
              <div className="share__option">
                <EmojiEmotions
                  htmlColor="goldenrod"
                  className="share__option-icon"
                />
                <span className="share__option-text">Feelings</span>
              </div>
            </div>
            <button className="share__button">Share</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
