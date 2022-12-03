/* ES6的模块化  import  export
  作为一个模块，我们不希望模块中所有的内容都暴露给外部
  作为导入方，也不希望导入无用的变量

  export 导出
    导出用来决定一个模块中哪些内容可以被外部查看
    到处分成两种
      1. 默认导出: 
        一个模块中只能有一个导出
        export default xxx
      2. 命名导出
  
  import 导入
    导入用来将外部模块中的内容导入到当前模块中
    导入默认模块
      1. 导入模块时，变量名可以自主指定，无需和模块中的变量名对应；一般书写时会对应，方便可读
      2. 在网页中导入模块时，模块的路径必须写完整（./   ../  ）
      import a from "./a";
    导入指定内容
      可以通过 as 指定变量名
      import { b, c } from "./a";
      import { b, c as T} from "./a";
    导入默认及指定内容
      import a, { b, c as typeC, obj } from "./a";
*/

const a = "模块a中的a";

const obj = {
  name: "模块a中的obj-name",
};

const fn = () => {
  console.log("模块a中的fn");
};

// export default a;   // 将变量a作为默认导出暴露
export default fn;

// 命名导出
export const b = "模块a中的b";
export const c = "模块a中的c";

export { obj };
