import React from "react";
import "./feed.css";
import { Posts } from "../../DummyData";
import Share from "../share/Share.jsx";
import Post from "../post/Post.jsx";

const Feed = () => {
  return (
    <>
      <div className="feed__container">
        <div className="feed__wrapper">
          <Share />
          {Posts.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feed;
