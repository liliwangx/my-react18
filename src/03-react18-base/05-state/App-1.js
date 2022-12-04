import "./App.css";
import { useState } from "react";

const App = () => {
  console.log("组件创建完毕···");
  /**
   * state
   *    state存储组件自己的状态给自己使用；props 父组件给子组件传递数据
   *
   *    state实际就是一个被React监控的变量
   *        当我们通过setState() 修改变量的值时，会触发组件的自动重新渲染
   *    只有state值发生变化时，组{}件才会重新渲染
   *
   *    当state的值是一个对象时，修改时，是使用新的对象去替换已有的对象
   *    当通过setState去修改一个state时，并不表示修改当前的state,
   *        它修改的是组件下一次渲染时的state的值
   *    setState()会触发组件的重新渲染，它是异步的;
   *        同步：调完setState()立刻渲染；
   *        异步：调完setState()先挂在队列，等所有执行完再去渲染。
   *        多次触发相同的setState()后会合并执行
   *
   *        当我们调用setState()需要用到旧的state值时，一定需要注意：有可能出现计算错误的情况
   *            （比如多次快速点击，执行时，旧state依然是初始修改那次的值，没有实时更新过来，导致计算后的state值是错误的）
   *        为了避免这种情况，可以通过为setState() 传递回调函数的形式来修改state值
   *
   */
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({ name: "Lili", age: 18 });

  const addFun = () => {
    // setCount(count + 1);

    setTimeout(() => {
      // setCount(count + 1);

      // setState()中回调函数的返回值，将会称为新的state值
      // 回调函数执行时，React会将最新的state值作为参数传递
      setCount((prev) => prev + 1);
    }, 1000);

    // setCount(2);
    // setCount(3);
    // setCount(4);
    // setCount(5);
    // setCount(6);
  };

  const updateUserFun = () => {
    // 修改对象的全部属性
    // setUser({ name: "DALI", age: 20 });

    // 如果只修改部分属性
    // 如果直接修改旧的state对象，由于对象还是哪个对象，所以不会生效
    // user.name = "HHH"

    // 方法一：
    const newUser = Object.assign({}, user);
    newUser.name = "HHH";
    setUser(newUser);

    // 方法二：
    setUser({ ...user, name: "HHH" });
  };

  return (
    <div className={"app"}>
      <h1>
        {count} --- {user.name} --- {user.age}
      </h1>
      <button onClick={addFun}>+</button>
      <button onClick={updateUserFun}>update</button>
    </div>
  );
};

// 导出App
export default App;
