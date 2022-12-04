import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./01-单元测试/App";
// import "./02-基础复习/01-变量";
// import "./02-基础复习/02-解构赋值";
// import "./02-基础复习/03-展开";
// import "./02-基础复习/04-箭头函数";
// import "./02-基础复习/05-模块化/index";
// import "./02-基础复习/06-类";
// import "./02-基础复习/07-类-this";
// import "./02-基础复习/08-类-继承";
// import "./02-基础复习/09-静态属性";
// import "./02-基础复习/10-数组的方法";
// import App from "./03-react18-base/02-组件";
// import App from "./03-react18-base/03-事件";
// import App from "./03-react18-base/04-props/App";
// import App from "./03-react18-base/05-state/App";
// import App from "./03-react18-base/05-state/App-1";
// import App from "./03-react18-base/06-useRef()和DOM对象/App";
// import App from "./03-react18-base/07-类组件/App";
import App from "./03-react18-base/08-demo/App";

// 获取根元素  ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// 将元素在根元素中显示  root.render()
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
