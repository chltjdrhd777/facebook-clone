import React from "react";
import styled from "styled-components";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";

function Feed() {
  return (
    <FeedDiv>
      <StoryReel />
      <MessageSender />

      {}
    </FeedDiv>
  );
}

const FeedDiv = styled.div``;

export default Feed;
