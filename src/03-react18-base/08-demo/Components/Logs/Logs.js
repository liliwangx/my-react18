/* 日志的容器 */
import LogItem from "./LogItem/LogItem";
import "./Logs.css";
import Card from "../UI/Card/Card";
import LogFilter from "./logFilter/logFilter";
import { useState } from "react";

const Logs = (props) => {
  /**
   * logsData 用来存储学习的日志
   *    这个数据除了当前组件logs需要使用外，logsForm也需要使用
   *    当遇到一个数据需要被多个组件使用时，我们可以将数据放入到这些组件共同的祖先元素中
   *        这样就可以使得多个组件都能方便的访问这个数据
   *
   *    state的提升: 数据提升到最近的共同的祖先中
   */

  // 模拟一组从服务器中加载的数据
  // const logsData = [];

  // 创建一个存储年份的state
  const [year, setYear] = useState(2022);

  // 创建一个修改年份的函数
  const changeYearHandler = (year) => {
    setYear(year);
  };

  // 过滤数据，只显示某一年的数据
  let filterData = props.logsData.filter(
    (item) => item.date.getFullYear() === year
  );
  // console.log("filterData~~", filterData);

  // 将数据放入JSX中
  let logItemData = filterData.map((item) => (
    <LogItem
      key={item.id}
      date={item.date}
      desc={item.desc}
      time={item.time}
      deleteLog={() => props.onDelLog(item.id)}
    />
  ));

  if (logItemData.length === 0) {
    logItemData = <p className="no-logs">当前没有日志哦</p>;
  }

  return (
    <Card className="logs">
      <LogFilter onChangeYear={changeYearHandler} />
      {
        logItemData
        // 对象中属性名和属性值同名，可以简写如下：
        // props.logsData.map(item => <LogItem {...item}/> )
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
    </Card>
  );
};

export default Logs;
