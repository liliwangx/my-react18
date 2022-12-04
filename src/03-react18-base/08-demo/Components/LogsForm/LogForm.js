import React, { useState } from "react";
import Card from "../UI/Card/Card";
import "./LogForm.css";

const LogForm = (props) => {
  const [inputDate, setDate] = useState();
  const [inputDesc, setDesc] = useState();
  const [inputTime, setTime] = useState();

  // 创建响应函数，监听表单项的变化
  const descChangeHandler = (e) => {
    setDesc(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const timeChangeHandler = (e) => {
    setTime(e.target.value);
  };

  // 监听表单的提交事件：当表单提交时，需要汇总表单的所有数据
  const formSumbit = (e) => {
    // 取消表单的默认行为
    e.preventDefault();
    if (!inputDate || !inputDesc || !inputTime) {
      alert("有信息未填写哈");
      return;
    }
    const newlog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime, // 转成数字
    };
    // console.log(newlog);

    // 当添加新的日志时，调用父组件传递过来的函数
    props.onSaveLog(newlog);

    // 提交表单后，清空表单
    setDate("");
    setDesc("");
    setTime("");
  };

  return (
    <Card className="logs-form">
      <form onSubmit={formSumbit}>
        <div className="form-item">
          {/* htmlFor: 给表单项设置标签属性 */}
          <label htmlFor="date">日期</label>
          <input
            onChange={dateChangeHandler}
            value={inputDate || ""}
            id="date"
            type="date"
          />
        </div>
        <div className="form-item">
          <label htmlFor="desc">内容</label>
          <input
            onChange={descChangeHandler}
            value={inputDesc || ""}
            id="desc"
            type={"text"}
          />
        </div>
        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input
            onChange={timeChangeHandler}
            value={inputTime || ""}
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
