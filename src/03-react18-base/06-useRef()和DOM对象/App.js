import "./App.css";
import { useRef, useState } from "react";

let temp;

const App = () => {
  /**
   * React中，尽量避免操作DOM，如不可避免时，尽量只读取，比如设置焦点等
   *
   * 获取原生DOM对象
   *    1. 可以使用传统的document来对DOM进行操作
   *    2. 直接从React中获取DOM对象
   *      步骤：
   *        1. 创建一个存储DOM对象的容器：使用useRef() 钩子函数
   *           钩子函数的注意事项：
   *               1.React中的钩子函数，只能用于函数组件或自定义钩子
   *               2.钩子函数只能直接在函数组件中调用
   *        2. 将容器设置为想要获取DOM对象元素的ref属性
   *           <h1 ref={xxx}>....</h1>
   *           React会自动将当前元素的DOM对象，设置为容器current属性
   *
   * useRef()
   *    返回的是一个普通的JS对象：{current:undefined}
   *    所以我们直接创建一个JS对象，也可以代替useRef()
   *
   *    区别：
   *        我们创建的对象，组件每次重新渲染都是去创建一个新对象
   *        useRef()创建的对象，可以确保每次渲染获取到的都是同一个对象
   *
   *    当需要一个对象不会因为组件的重新渲染而改变时，就可以使用useRef()
   *
   */

  const h1Ref = useRef(null); // 创建一个容器
  const [count, setCount] = useState(1); // 用来实现重新渲染组件，测试temp === h1Ref
  // const h1Ref = {current:null};

  // 使用自己创建的对象，测试结果：第一次 false，第二次 false
  // 说明我们创建的对象，组件每次重新渲染都是去创建一个新对象
  console.log(temp === h1Ref);

  temp = h1Ref;

  const clickHandler = () => {
    // 通过id获取 h1
    const header = document.getElementById("header");
    // alert(header);
    // header.innerHTML = "哈哈";

    console.log(h1Ref);
    // alert(h1Ref.current === header);
    h1Ref.current.innerText = "嘻嘻！";
  };

  const countAddHandler = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className={"app"}>
      <h1 id="header" ref={h1Ref}>
        我是标题
      </h1>
      <button onClick={clickHandler}>click</button>
      <button onClick={countAddHandler}>Add</button>
    </div>
  );
};

// 导出App
export default App;
