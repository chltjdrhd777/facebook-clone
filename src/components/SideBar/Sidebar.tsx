import React from "react";
import Hospital from "@material-ui/icons/LocalHospital";
import EmojiFlags from "@material-ui/icons/EmojiFlags";
import People from "@material-ui/icons/People";
import Chat from "@material-ui/icons/Chat";
import Storefront from "@material-ui/icons/Storefront";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import ExpandMore from "@material-ui/icons/ExpandMoreOutlined";
import SidebarRow from "./SidebarRow";
import styled from "styled-components";

function Sidebar() {
  return (
    <SidebarDiv>
      <SidebarRow
        src="https://t1.daumcdn.net/cfile/tistory/24525D3856E69D871C"
        title="user1"
      />
      <SidebarRow Icon={Hospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Vidoes" />
      <SidebarRow Icon={ExpandMore} title="More" />
    </SidebarDiv>
  );
}

const SidebarDiv = styled.div`
  padding: 25px 10px;
  flex: 0.33;
`;

export default Sidebar;
