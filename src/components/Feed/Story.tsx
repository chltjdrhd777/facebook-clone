import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

interface Props {
  image: string;
  profileSec: string;
  title: string;
}

interface StoryDivProps {
  img: string;
}

function Story({ image, profileSec, title }: Props) {
  return (
    <StoryDiv img={image}>
      <Avatar className="Story_Avatar" src={profileSec} />
      <h4>{title}</h4>
    </StoryDiv>
  );
}

const StoryDiv = styled.div<StoryDivProps>`
  background-image: url(${(prop) => prop.img});
  width: 150px;
  height: 200px;
  margin-right: 10px;
  border-radius: 10px;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: transform 100ms ease-in;
  &:hover {
    transform: scale(1.1);
  }

  & .Story_Avatar {
    margin: 10px;
    border: 5px solid #2e81f4;
  }

  & h4 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #2e81f4;
    background: black;
    border-radius: 10px;
    padding: 3px;
    font-weight: 700;
  }
`;

export default Story;
