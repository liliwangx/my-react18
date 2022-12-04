/*
  组件：
    React中组件有2种创建方式
    函数式组件
        函数组件就是一个返回JSX的普通函数
        组件的首字母必须是大写
    类组件
        类组件必须要继承 React.Component
        相较于函数组件，类组件的编写麻烦一些，但是他们的功能是一样的
        类组件中，必须添加一个render()方法，且方法的返回值必须是一个JSX
*/

import React from "react";

// 函数组件
// const App = () => {
//   return <div>我是App组件！</div>;
// };

class App extends React.Component {
  render() {
    return <div>我是一个类组件</div>;
  }
}

// 导出App
export default App;
