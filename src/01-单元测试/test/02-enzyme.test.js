// 引入模块 做浅渲染，因为当前结构简单,只有一层
import App from "../App";
import Enzyme, { shallow, mount } from "enzyme"; // 需要适配器 Enzyme目前支持的react16版本，高版本不支持
// 导入适配器
import Adapter from "@cfaester/enzyme-adapter-react-18";
// 配置适配器
Enzyme.configure({ adapter: new Adapter() });

// describe  固定的一个函数
describe("react-test-render", function () {
  // it 测试点，具体的会走后面的函数；会打印到控制台
  it("app的名字是todo", function () {
    // 渲染虚拟DOM  shallow
    let app = shallow(<App />);
    expect(app.find("h2").text()).toEqual("todo");
  });

  it("删除功能", function () {
    // 渲染真实DOM mount
    let app = mount(<App />);

    let todoLength = app.find("li").length;

    app.find("button.delete").at(0).simulate("click");

    let todoLengthAfterClick = app.find("li").length;

    expect(todoLengthAfterClick).toEqual(todoLength - 1);
  });

  it("添加功能", function () {
    let app = mount(<App />);

    let todoLength = app.find("li").length;

    let addInput = app.find("inpit");
    addInput.value = "www";

    app.find(".add").at(0).simulate("click");

    let todoLengthAfterClick = app.find("li").length;

    expect(todoLengthAfterClick).toEqual(todoLength + 1);
  });
});

// 执行测试用例命令 npm run test

/*
5. 第三方提供的Enzyme, 需要配置适配器
*/
