import React, { Component } from "react";

class User extends Component {
  /**
   * 类组件的props是存储在类的实例对象中
   *    可以直接通过实例对象访问
   *    this.props
   *
   * 类组件中，state统一存储在实例对象的state属性中
   *    可以通过this.state来访问
   *    通过this.setState()进行修改
   *        当我们通过this.setState()修改state时，React只会修改设置了的属性，之前的属性都保留
   *        但是仅限于直接存储在state中的值
   *
   * 函数组件中，响应函数直接以函数的形式定义在组件中
   * 类组件中，响应函数是以类的方法定义
   *
   * 获取DOM对象
   *    1. 创建一个属性，用来存储DOM对象
   *        divRef = React.createRef();
   *    2. 将这个属性设置为指定元素的ref属性
   *
   */

  // 创建属性存储DOM对象
  divRef = React.createRef();
  // divRef = { current: null };

  // 向state中添加属性
  state = {
    count: 2,
    test: "haha",
    obj: {
      name: "lalala",
      age: 25,
    },
  };

  // 为了省事儿，在类组件中，响应函数都应该以箭头函数的形式定义，省却了this指向的问题
  clickHandler = () => {
    // this.setState({ count: 5 });
    // this.setState((prev) => {
    //   return { count: prev.count + 1 };
    // });

    // 只修改obj的name，此时，obj的age 会丢失；因为obj.name obj.age 不是直接存储在state
    // this.setState({ obj: { name: "kaka" } });

    this.setState({ obj: { ...this.state.obj, name: "kaka" } });
  };

  render() {
    console.log(this.props);

    console.log(this.divRef);

    return (
      <div ref={this.divRef}>
        <h1>
          {this.state.count} --- {this.state.test}
        </h1>
        <h2>
          {this.state.obj.name} --- {this.state.obj.age}
        </h2>
        <button onClick={this.clickHandler}>click btn</button>
        <ul>
          <li>姓名：{this.props.name}</li>
          <li>年龄：{this.props.age}</li>
          <li>性别：{this.props.gender}</li>
        </ul>
      </div>
    );
  }
}

export default User;
