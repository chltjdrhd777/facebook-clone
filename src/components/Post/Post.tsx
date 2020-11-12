import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import NearMe from "@material-ui/icons/NearMe";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExpandMore from "@material-ui/icons/ExpandMore";

interface Props {
  profilePic?: string;
  message?: string;
  date?: string;
  imgName?: string;
  username?: string;
}

function Post({ profilePic, message, imgName, username, date }: Props) {
  return (
    <PostDiv>
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_info">
          <h3>{username}</h3>
          <p>{date}</p>
        </div>
      </div>

      <div className="post_content">
        <p>{message}</p>
      </div>

      <div className="post_bottomOPtions">
        <div className="post_option">
          <ThumbUp />
          <p>Like</p>
        </div>

        <div className="post_option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>

        <div className="post_option">
          <NearMe />
          <p>Share</p>
        </div>

        <div className="post_option">
          <AccountCircle />
          <ExpandMore />
        </div>
      </div>
    </PostDiv>
  );
}

const PostDiv = styled.div`
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);

  & .post_top {
    display: flex;
    position: relative;
    align-items: center;
    padding: 15px;

    & .post_avatar {
      margin-right: 10px;
    }
    & .post_info {
      & h3 {
        font-size: medium;
      }
      & p {
        font-size: small;
        color: gray;
      }
    }
  }

  & .post_content {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px 25px;
  }

  & .post_bottomOPtions {
    display: flex;
    justify-content: space-evenly;
    color: gray;
    cursor: pointer;
    border-top: 1px solid lightgray;
    padding: 15px;
    font-size: medium;

    & .post_option {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;

      & p {
        margin-left: 10px;
      }

      &:hover {
        background-color: #eff2f5;
        border-radius: 10px;
      }
    }
  }
`;

export default Post;
