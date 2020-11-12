import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/SideBar/Sidebar";
import Feed from "./components/Feed/Feed";
import styled from "styled-components";
import Widget from "./components/Widget/Widget";

function App() {
  return (
    <div className="App">
      <Header />
      <MiddleDiv>
        <Sidebar />
        <Feed />
        <Widget />
      </MiddleDiv>
    </div>
  );
}

const MiddleDiv = styled.div`
  display: flex;
`;

export default App;
