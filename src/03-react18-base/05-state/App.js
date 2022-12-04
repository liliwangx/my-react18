import "./App.css";
import { useState } from "react";

const App = () => {
  console.log("组件创建完毕···");

  /**
   * React中，当组件渲染完毕后，再修改组件中的变量时，组件不会重新渲染
   * 要使得组件可以收到变量的影响，必须在变量修改后对组件进行重新渲染
   * 此时，需要使用一个特殊的变量，当这个变量修改后，组件会自动重新渲染
   *
   * state 相当于一个变量
   *    只是这个变量在React中进行了注册
   *    React会监控这个变量的变化，当state发生变化时，会自动触发组件的重新渲染，使得我们的修改可以在页面中呈现出来
   *
   * 在函数组件中，我们需要通过钩子函数，获取state
   * 使用钩子函数useState() 来创建state
   *    import { useState } from 'react'
   * 它需要一个值作为参数，这个值就是state的初始值
   *    该函数会返回一个数组
   *        数组中第一个元素，是初始值
   *            初始值只用来显示数据，直接修改不会触发组件渲染
   *        数组中的第二个元素，是一个函数，通常会命名setxxx
   *            这个函数用来修改state, 调用其修改state后，会触发组件重新渲染，并且使用函数中的值作为我们新的state值
   *
   */

  const [count, setCount] = useState(1);

  // let count = 2;

  const addFun = () => {
    // count++;
    setCount(count + 1);
    console.log(count);
  };

  const lessFun = () => {
    // count--;
    setCount(count - 1);
    console.log(count);
  };

  return (
    <div className={"app"}>
      <h1>{count}</h1>
      <button onClick={lessFun}>-</button>
      <button onClick={addFun}>+</button>
    </div>
  );
};

// 导出App
export default App;
