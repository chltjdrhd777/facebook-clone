import React from "react";
import { Avatar, SvgIconTypeMap } from "@material-ui/core";
import styled from "styled-components";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

interface Prop {
  src?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
}

function SidebarRow({ src, Icon, title }: Prop) {
  return (
    <SidebarRowDiv>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <p>{title}</p>
    </SidebarRowDiv>
  );
}

const SidebarRowDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
    border-radius: 10px;
  }
  & > p {
    margin-left: 20px;
    font-weight: 800;
  }

  & > svg {
    font-size: xx-large;
    color: #2e81f4;
  }
`;

export default SidebarRow;
