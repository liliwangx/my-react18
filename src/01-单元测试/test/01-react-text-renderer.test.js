// 引入模块 做浅渲染，因为当前结构简单,只有一层
import ShallowRender from "react-test-renderer/shallow";
import App from "../App";
// 做模拟点击的
import ReactTestUtils from "react-dom/test-utils";

// describe  固定的一个函数
describe("react-test-render", function () {
  // it 测试点，具体的会走后面的函数；会打印到控制台
  it("app的名字是todo", function () {
    /*
      1.基于ShallowRender创建对象
      2.利用它的render渲染组件
      3.利用它输出虚拟DOM节点 
    */
    const render = new ShallowRender();
    render.render(<App />);
    // console.log(render.getRenderOutput());
    // console.log(render.getRenderOutput().props);
    // todo 名字的标签
    // console.log(render.getRenderOutput().props.children[0].type); // h2

    expect(render.getRenderOutput().props.children[0].type).toBe("h2");
    expect(render.getRenderOutput().props.children[0].props.children).toBe(
      "todo"
    );
  });

  it("删除功能", function () {
    // 真实DOM
    const app = ReactTestUtils.renderIntoDocument(<App />);
    // 利用标签去查 app DOM， 找出所有的li
    let todoItem = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, "li");
    console.log(todoItem.length);

    let deleteBtn = todoItem[0].querySelector("button");
    // 模拟删除
    ReactTestUtils.Simulate.click(deleteBtn);
    let todoItemAfterClick = ReactTestUtils.scryRenderedDOMComponentsWithTag(
      app,
      "li"
    );
    expect(todoItem.length - 1).toBe(todoItemAfterClick.length);
  });

  it("添加功能", function () {
    const app = ReactTestUtils.renderIntoDocument(<App />);
    let todoItem = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, "li");
    console.log(todoItem.length);

    let addInput = ReactTestUtils.scryRenderedDOMComponentsWithTag(
      app,
      "input"
    );
    // 模拟Input 输入
    addInput.value = "ggg";

    // 通过 class 查找标签
    let addBtn = ReactTestUtils.findRenderedDOMComponentWithClass(app, "add");
    ReactTestUtils.Simulate.click(addBtn);
    let todoItemAfterClick = ReactTestUtils.scryRenderedDOMComponentsWithTag(
      app,
      "li"
    );
    expect(todoItem.length + 1).toBe(todoItemAfterClick.length);
  });
});

// 执行测试用例命令 npm run test

/*
官方：
1. 为什么要做单元测试？  验证代码是否OK，以及后期代码扩展后，可以自动验证是否有影响, 减少回归测试的次数
2. 使用react 官方库，测试文件名需要以 test.js 结尾
3. 使用describe  it  固定关键字来编写 
4. getRenderOutput()    expect()   toBe()
*/
