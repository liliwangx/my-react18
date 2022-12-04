/* 日志的容器 */
import LogItem from "./LogItem/LogItem";
import "./Logs.css";

const Logs = () => {
  // 模拟一组从后端请求来的数据
  const logsData = [
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

  // 将数据放入JSX中
  const logItemDate = logsData.map((item) => (
    <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} />
  ));

  return (
    <div className="logs">
      {
        logItemDate
        // 对象中属性名和属性值同名，可以简写如下：
        // logsData.map(item => <LogItem {...item}/> )
      }

      {/*在父组件中, 可以直接在子组件中设置属性*/}
      {/*<LogItem test="456" hello="abc" fn={()=>{}} />*/}
      {/* <LogItem
        date={new Date(2022, 10, 28, 19, 0)}
        desc={"学习React"}
        time={"50"}
      />
      <LogItem
        date={new Date(2022, 11, 2, 19, 0)}
        desc={"学习TS"}
        time={"30"}
      /> */}
    </div>
  );
};

export default Logs;
