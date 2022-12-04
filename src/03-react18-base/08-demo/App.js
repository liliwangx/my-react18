import Logs from "./Components/Logs/Logs";
import LogForm from "./Components/LogsForm/LogForm";
import "./App.css";
import { useState } from "react";

const App = () => {
  // 模拟一组从后端请求来的数据
  const logsDataMock = [
    {
      id: "001",
      date: new Date(2021, 1, 20, 18, 30),
      desc: "学习React16",
      time: 30,
    },
    {
      id: "002",
      date: new Date(2022, 2, 10, 12, 30),
      desc: "学习Vue2",
      time: 20,
    },
    {
      id: "003",
      date: new Date(2022, 9, 11, 11, 30),
      desc: "学习面试内容",
      time: 120,
    },
    {
      id: "004",
      date: new Date(2022, 10, 15, 10, 30),
      desc: "学习React18",
      time: 80,
    },
  ];
  const [logsData, setLogsData] = useState(logsDataMock);

  // 将logsForm中的数据传递给App组件，然后App组件，将新的日志添加到数组中
  const changeData = (newlog) => {
    // console.log("App组件~~", newlog);
    // 向日志中添加ID； 模拟数据后端返回回来的
    newlog.id = Date.now() + "";
    setLogsData([newlog, ...logsData]);
  };

  // 删除log
  const deleteLog = (id) => {
    setLogsData((prev) => {
      return [...prev].filter((item) => item.id !== id);
    });
  };

  return (
    <div className="app">
      {/* 引入LogForm */}
      <LogForm onSaveLog={changeData} />
      <Logs logsData={logsData} onDelLog={deleteLog} />
    </div>
  );
};

// 导出App
export default App;
