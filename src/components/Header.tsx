import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { StorefrontOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import Notifications from "@material-ui/icons/NotificationsActive";
import More from "@material-ui/icons/ExpandMore";

function Header() {
  return (
    <Div>
      <div className="header_left">
        <img
          src="//upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebooke logo"
        />

        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header_center">
        <div className="header_option being_active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar />
          <h4>User Name</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <Notifications />
        </IconButton>

        <IconButton>
          <More />
        </IconButton>
      </div>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  padding: 15px 20px;
  justify-content: space-between;
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 75%);

  & .header_left {
    display: flex;
    justify-content: space-evenly;

    & > img {
      height: 40px;
    }

    & .header_input {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: #eff2f5;
      margin-left: 10px;
      border-radius: 33px;

      & > input {
        border: none;
        outline: none;
        background-color: transparent;
      }
    }
  }

  & .header_center {
    display: flex;
    justify-content: center;
    flex: 1;

    & > .header_option {
      display: flex;
      align-items: center;
      padding: 0 30px;
      cursor: pointer;
      color: gray;
      &:hover {
        background-color: #eff2f5;
        border-radius: 10px;
        border-bottom: none;
        color: #2e81f4;
      }
    }

    & .header_option.being_active {
      color: #2e81f4;
      border-bottom: 4px solid #2e81f4;
    }
  }
`;

export default Header;
