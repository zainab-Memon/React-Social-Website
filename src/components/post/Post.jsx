import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../DummyData";
import { useState } from "react";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <>
      <div className="post__container">
        <div className="post__wrapper">
          <div className="post__top">
            <div className="post__top-left">
              <img
                src={
                  Users.filter((u) => u.id === post.userId)[0].profilePicture
                }
                alt="Post Profile Img"
                className="post__profile-img"
              />
              <span className="post__username">
                {Users.filter((u) => u.id === post.userId)[0].username}
              </span>
              <span className="post__date">{post.date}</span>
            </div>
            <div className="post__top-right">
              <MoreVert />
            </div>
          </div>
          {/* post top end====================== */}

          <div className="post_center">
            <span className="post__text"> {post?.desc}</span>
            <img src={post.photo} alt="Post Img" className="post__img" />
          </div>
          {/* post center end===============  */}
          <div className="post__bottom">
            <div className="post__bottom-left">
              <img
                src="assets/like.png"
                alt="like Icon"
                className="post__bottom-likeicon"
                onClick={likeHandler}
              />
              <img
                src="assets/heart.png"
                alt="Heart Icon"
                className="post__bottom-likeicon"
                onClick={likeHandler}
              />
              <span className="post__bottom-likecounter">
                {like} people liked it
              </span>
            </div>

            <div className="post__bottom-right">
              <span className="post__comment-text">
                {post.comment} comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
