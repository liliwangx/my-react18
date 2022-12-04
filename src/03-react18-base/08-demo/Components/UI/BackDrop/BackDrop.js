import React from "react";
import "./BackDrop.css";
import ReactDOM from "react-dom";

// 获取 backdrop 的根元素
const backdropRoot = document.getElementById("backdrop-root");

const BackDrop = (props) => {
  return ReactDOM.createPortal(
    <div className="backDrop">{props.children}</div>,
    backdropRoot
  );
};

export default BackDrop;
