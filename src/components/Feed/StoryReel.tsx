import React from "react";
import styled from "styled-components";
import Story from "./Story";

function StoryReel() {
  return (
    <StoryRealDiv>
      <Story
        image="https://t1.daumcdn.net/cfile/tistory/24525D3856E69D871C"
        profileSec="https://t1.daumcdn.net/cfile/tistory/24525D3856E69D871C"
        title="anon"
      />
      <Story
        image="https://t1.daumcdn.net/cfile/tistory/24525D3856E69D871C"
        profileSec="https://t1.daumcdn.net/cfile/tistory/24525D3856E69D871C"
        title="anon2"
      />
      <Story
        image="https://t1.daumcdn.net/cfile/tistory/24525D3856E69D871C"
        profileSec="https://t1.daumcdn.net/cfile/tistory/24525D3856E69D871C"
        title="anon3"
      />
    </StoryRealDiv>
  );
}

const StoryRealDiv = styled.div`
  display: flex;
  padding: 10px 20px;
`;

export default StoryReel;
