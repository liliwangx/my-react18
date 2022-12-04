import React from "react";

const logFilter = (props) => {
  const changeYear = (e) => {
    props.onChangeYear(+e.target.value);
    // console.log(+e.target.value); // 把值转换为数字
  };
  return (
    <div>
      年份：
      <select defaultValue={props.year} onChange={changeYear}>
        <option value={"2022"}>2022</option>
        <option value={"2021"}>2021</option>
        <option value={"2020"}>2020</option>
      </select>
    </div>
  );
};

export default logFilter;
