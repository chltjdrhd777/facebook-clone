import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/SideBar/Sidebar";
import Feed from "./components/Feed/Feed";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Header />
      <MiddleDiv>
        <Sidebar />
        <Feed />
      </MiddleDiv>

      {/* widgets */}
    </div>
  );
}

const MiddleDiv = styled.div`
  display: flex;
`;

export default App;
