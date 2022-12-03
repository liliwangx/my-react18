// import flagA from "./a";
// import fnA from "./a";

// console.log(flagA);  // 模块a中的a
// fnA(); // 模块a中的fn

// import { b, c as typeC, obj } from "./a";

// 一次导入所有内容   默认、指定内容
import a, { b, c as typeC, obj } from "./a";

console.log(b + "----" + typeC); // 模块a中的b----模块a中的c
console.log(obj.name); // 模块a中的obj-name
