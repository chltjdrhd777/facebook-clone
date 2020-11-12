import React from "react";
import styled from "styled-components";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "../Post/Post";

function Feed() {
  return (
    <FeedDiv>
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://t1.daumcdn.net/cfile/tistory/24525D3856E69D871C"
        username="anon1"
        date={new Date().toUTCString()}
        message="test message"
      />
      {}
    </FeedDiv>
  );
}

const FeedDiv = styled.div``;

export default Feed;
