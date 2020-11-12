import React from "react";
import styled from "styled-components";
import { Avatar, Input } from "@material-ui/core";
import { useState } from "react";
import AttachmentIcon from "@material-ui/icons/Attachment";
import Videocam from "@material-ui/icons/Videocam";
import PhotoLibaray from "@material-ui/icons/PhotoLibrary";
import InsertEmotion from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState({});
  const [fileCheck, setFileCheck] = useState("파일선택");
  const onChangeFunc = (e: any) => {
    setInput(e.target.value);
  };

  const setImgFunc = (e: any) => {
    //console.log(e.target.files);
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setFileCheck(e.target.files[0].name);
    }
  };

  const submitFunc = (e: any) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <MessageSenderDiv>
      <div className="messageSender_top">
        <Avatar src="https://t1.daumcdn.net/cfile/tistory/24525D3856E69D871C" />
        <form>
          <input
            type="text"
            className="MessageSender_input"
            placeholder="What's going on"
            value={input}
            onChange={onChangeFunc}
          />
          <div className="fileAttachingDiv">
            <input
              type="text"
              value={fileCheck}
              readOnly
              className="fileChoose_check"
            />
            <label htmlFor="MessageSender_file" className="file_send">
              <AttachmentIcon />
            </label>

            <Input type="file" id="MessageSender_file" onChange={setImgFunc} />
          </div>

          <button onClick={submitFunc} type="submit">
            send your file
          </button>
        </form>
      </div>

      <div className="messageSender_bottom">
        <div className="message_options">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="message_options">
          <PhotoLibaray style={{ color: "green" }} />
          <h3>Photo Video</h3>
        </div>
        <div className="message_options">
          <InsertEmotion style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </MessageSenderDiv>
  );
}

const MessageSenderDiv = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  width: 100%;

  & .messageSender_top {
    display: flex;
    border-bottom: 1px solid #eff2f5;
    padding: 15px;

    & > form {
      flex: 1;
      display: flex;
      & > .MessageSender_input {
        outline-width: 0;
        border: 2px solid transparent;
        padding: 5px 20px;
        margin: 0px 10px;
        border-radius: 100px;
        background-color: #eff2f5;
        ::-webkit-input-placeholder {
          color: gray;
        }
        flex: 1;

        &:focus {
          border: 2px solid #2e81f4;
        }
      }

      & .fileAttachingDiv {
        display: flex;
        margin: 0px 10px;

        & .fileChoose_check {
          border: none;
          outline: none;
          background: transparent;
        }
      }

      & #MessageSender_file {
        display: none;
      }

      & .file_send {
        background-color: transparent;
        border-radius: 10px;
        color: gray;
        font-weight: 800;
        display: flex;
        align-items: center;
        padding: 10px;
        cursor: pointer;
      }

      & > button {
        color: white;
        background-color: #2e81f4;
        border: none;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }

  & .messageSender_bottom {
    display: flex;
    justify-content: space-evenly;

    & .message_options {
      padding: 20px;
      display: flex;
      align-items: center;
      color: gray;
      margin: 5px;

      & h3 {
        font-size: medium;
        margin-left: 10px;
      }

      &:hover {
        background-color: #eff2f5;
        border-radius: 20px;
        cursor: pointer;
      }
    }
  }
`;

export default MessageSender;
