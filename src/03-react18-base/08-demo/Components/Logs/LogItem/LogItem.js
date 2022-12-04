import React, { useState } from "react";
import MyDate from "./MyDate/MyDate";
import "./LogItem.css";
import Card from "../../UI/Card/Card";
import ConfirmModal from "../../UI/Card/ConfirmModal/ConfirmModal";

const LogItem = (props) => {
  /*
    props
    props是只读的，不能修改，父组件传给子组件的数据

    在函数组件中，属性就相当于是函数的参数，可以通过参数来访问
    可以在和函数组件的形参中，定义一个props, props指向的是一个对象
    它包含了父组件中传递的所有参数
  */

  // props.desc = '嘻嘻'; // 不能修改props中的属性
  // console.log(props);

  // 添加一个state, 记录是否显示ConfirmModal
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confiremMsg, setShowConfiremMsg] = useState("");

  // 删除函数
  const deleteItemHandler = () => {
    setShowConfirmModal(true);
    setShowConfiremMsg("删除不可逆，确认删除吗？");
  };

  // 取消删除操作
  const cancelHandler = () => {
    setShowConfirmModal(false);
  };

  // 确认删除
  const delHandler = () => {
    setShowConfirmModal(false);
    props.deleteLog();
  };

  /**
   * portal
   *    组件默认会作为父组件的后代渲染到页面中
   *        但是有些情况下，这种方式会带来一些问题（例如一些样式层级问题等）
   *    通过portal可以将组件渲染到页面中的指定位置
   *    使用方法
   *        1. 在index.html 添加一个新的元素
   *            <div id="backdrop-root"></div>
   *        2. 修改组件的渲染方式
   *              通过ReactDOM.createPortal()作为返回值创建元素
   *              参数：
   *                1. JSX  修改前return后的代码
   *                2. 目标位置（DOM元素）
   *
   */

  return (
    <Card className="item">
      {showConfirmModal ? (
        <ConfirmModal
          confirmText={confiremMsg}
          onCancle={cancelHandler}
          onDelHandler={delHandler}
        />
      ) : (
        ""
      )}

      <MyDate date={props.date} />
      {/* 日志内容的容器 */}
      <div className="content">
        {/* 
            如果将组件中的数据全部写死，将会导致组件无法动态设置，不具有使用价值
            我们希望组件数据可以由外部设置，在组件间，父组件可以通过props（属性）向子组件传递数据
          */}
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}分钟</div>
      </div>
      {/* 添加删除按钮 */}
      <div>
        <div onClick={deleteItemHandler} className="delete">
          x
        </div>
      </div>
    </Card>
  );
};

export default LogItem;
