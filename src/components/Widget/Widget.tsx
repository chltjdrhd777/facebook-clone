import React from "react";
import styled from "styled-components";

function Widget() {
  return (
    <WidgetsDiv>
      <iframe
        title="widgets"
        src=""
        frameBorder="0"
        width="340"
        height="1500"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allowTransparency={true}
        allow="encrypted-media"
      ></iframe>
    </WidgetsDiv>
  );
}

const WidgetsDiv = styled.div``;

export default Widget;
