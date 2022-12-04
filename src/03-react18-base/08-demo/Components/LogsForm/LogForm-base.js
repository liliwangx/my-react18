import React, { useState } from "react";
import Card from "../UI/Card/Card";
import "./LogForm.css";

const LogForm = () => {
  // 当表单项发生变化时，获取用户输入的内容
  // 创建3个变量，存储表单中的数据

  // let inputDate, inputDesc, inputTime;

  // const [inputDate, setDate] = useState();
  // const [inputDesc, setDesc] = useState();
  // const [inputTime, setTime] = useState();

  // 将表单数据存储在一个对象中
  const [formData, setFormData] = useState({
    inputDate: "",
    inputDesc: "",
    inputTime: "",
  });

  // 创建响应函数，监听表单项的变化
  const descChangeHandler = (e) => {
    // 获取当前触发事件的对象
    // 事件对象中保存了当前事件触发时的所有信息
    // e.target 执行的是触发事件的对象  DOM对象

    // inputDesc = e.target.value;
    // setDesc(e.target.value);
    setFormData({ ...formData, inputDesc: e.target.value });

    // console.log("descChangeHandler", e.target.value);
  };

  const dateChangeHandler = (e) => {
    // inputDate = e.target.value;
    // setDate(e.target.value);
    setFormData({ ...formData, inputDate: e.target.value });
    // console.log("dateChangeHandler", e.target.value);
  };

  const timeChangeHandler = (e) => {
    // inputTime = e.target.value;
    // setTime(e.target.value);
    setFormData({ ...formData, inputTime: e.target.value });
    // console.log("timeChangeHandler", e.target.value);
  };

  // 监听表单的提交事件：当表单提交时，需要汇总表单的所有数据

  /**
   * React中，通常不需要表单自行提交,需要通过React提交
   *    因此，需要取消默认行为
   */

  const formSumbit = (e) => {
    console.log("表单提交啦~~");

    // 取消表单的默认行为
    e.preventDefault();

    // 获取表单项中的所有数据: 时间，内容，时长
    // console.log(inputDate, inputDesc, inputTime);

    // const newlog = {
    //   date: new Date(inputDate),
    //   desc: inputDesc,
    //   time: +inputTime, // 转成数字
    // };
    // console.log(newlog);

    // console.log(formData);

    /**
     * 提交表单后，清空表单中的旧数据
     *     现在这种表单，在React中我们称为非受控组件
     *          数据是用户手动输入的，自己声明了变量，没有使用state，没有绑定到input的value
     *
     * 可以将表单中的数据存储在state中
     *      将state设置为表单的value值
     *      这样，当表单项发生变化，state会随之变化
     *      反之，state发生变化，表单项也会跟着改变，这种操作称之为双向数据绑定
     *    这样一来，表单就称为了一个受控组件
     *
     * 非受控组件和受控组件：
     *    在 react 中，Input textarea 等组件默认是不受控值的
     *        （输入框内部的值是用户控制，和React无关）。
     *    但是这里可以转化成受控组件，
     *        就是通过 onChange 事件获取当前输入内容，将当前输入内容作为 value 传入，此时就成为受控组件。
     *    好处：可以通过 onChange 事件控制用户输入，使用正则表达式过滤不合理输入。
     */
    // setDate("");
    // setDesc("");
    // setTime("");

    setFormData({
      inputDate: "",
      inputDesc: "",
      inputTime: "",
    });
  };

  return (
    <Card className="logs-form">
      <form onSubmit={formSumbit}>
        <div className="form-item">
          {/* htmlFor: 给表单项设置标签属性 */}
          <label htmlFor="date">日期</label>
          <input
            onChange={dateChangeHandler}
            value={formData.inputDate}
            id="date"
            type="date"
          />
        </div>
        <div className="form-item">
          <label htmlFor="desc">内容</label>
          <input
            onChange={descChangeHandler}
            value={formData.inputDesc}
            id="desc"
            type={"text"}
          />
        </div>
        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input
            onChange={timeChangeHandler}
            value={formData.inputTime}
            id="time"
            type={"number"}
          />
        </div>
        <div className="form-btn">
          <button>添加</button>
        </div>
      </form>
    </Card>
  );
};

export default LogForm;
