/*
  事件
  在React中，事件需要通过元素的属性来设置
  和原生JS不同，在React中，事件的属性需要使用驼峰命名法
      onclick -> onClick
      onchange -> onChange
  属性值不能直接执行代码，而是需要一个回调函数
      onclick="alert(123)"
      onClick={()=>{alert(123)}}

  React中，无法通过return false 取消默认行为

  事件对象
  React事件中，同样会传递事件对象，可以在响应函数中定义参数来接收事件对象
  React中的事件对象同样不是原生的事件对象，是经过React包装后的事件对象
  由于对象经过包装，所以使用过程中，我们无需考虑兼容性问题
      event.preventDefault(); // 取消默认行为
      event.stopPropagation(); // 取消事件的冒泡

*/

import React from "react";

const App = () => {
  const handler = (event) => {
    event.preventDefault(); // 取消默认行为  点击“超链接”不会跳转
    event.stopPropagation(); // 取消事件的冒泡  点击button时，不会冒泡到父div上，div的click不会执行

    console.log("handler-被点击啦");
    // return false;  // 取消默认行为，React中不生效
  };
  return (
    <div
      style={{
        width: 200,
        height: 200,
        margin: "100px auto",
        backgroundColor: "#bfa",
      }}
      onClick={() => {
        alert("div 的click");
      }}
    >
      <button
        onClick={(event) => {
          event.stopPropagation();
          alert("123");
        }}
      >
        点我一下
      </button>
      <button onClick={handler}>click me</button>
      <br />
      <a href="https://www.baidu.com" onClick={handler}>
        超链接
      </a>
    </div>
  );
};

/*
  <button onclick="alert(123)">点我一下</button>

  <button id="btn01">点我一下</button>

  document.getElementById('btn01').onclick = function(){};
  document.getElementById('btn01').addEventListener('click', function(){}, false);

*/

export default App;
