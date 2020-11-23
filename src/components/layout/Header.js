import React from "react";

function Header() {
  return <div style={headerStyle}></div>;
}

const headerStyle = {
  fontfamily: "sans-serif",
  display: "flex",
  flexdirection: "column",
  backgroundcolor: "silver",
  margin: 0,
};

export default Header;
