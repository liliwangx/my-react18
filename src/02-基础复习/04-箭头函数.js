/*
  只有一个参数的函数，参数=>返回值
  如果没有参数，或者多个参数，需要用 () 
    () => 
    (a, b) => 
  箭头后面的值，就是函数的返回值
    返回值必须是一个表达式 （有值的语句）
    如果返回值是对象，需要加上 () 
        const sum1 = (a, b) => ({name: 'aaa'});
*/

const func = function (a) {
  return "hello";
};

// 只有一个参数的函数，参数=>返回值
const func1 = (a) => "hello";
const func2 = (a) => "hello" + a;
const func3 = () => "hello";
const func4 = (a, b) => "hello";

const sum = (a, b) => a + b;
console.log(sum(1, 2)); // 3
const sum1 = (a, b) => ({ name: "aaa" });

const sum2 = (a, b) => {
  if (a > b) {
    return a - b;
  } else {
    return a + b;
  }
};

/*
  箭头函数
  特点：
  1. 箭头函数中没有arguments
  2. 箭头函数没有自己的this，它的this是外层作用域的this
  3. 箭头函数中的this，无法通过call()  apply()   bind() 修改
  4. 箭头函数不能作为构造函数，不能new()
*/

function fn() {
  // argument 用来保存函数的实参
  console.log(arguments.length);
}
fn(); // 0
const fn1 = () => {
  // console.log(arguments); // 'arguments' is not defined
};

function fn2(a, b, ...args) {
  // argument 用来保存函数的实参
  console.log(args);
}
fn2(); // []
const fn3 = (...args) => {
  console.log(args);
};
fn3(); // []

const fun = () => {
  console.log("fun--", this);
};
fun(); //  this  ->   window

const obj = {
  hello: () => {
    console.log(this);
  },
};
obj.hello(); //  this  ->   window

const obj2 = {
  hello: function () {
    const test = () => {
      console.log(this);
    };
    test();
  },
};
obj2.hello(); // this  ->   obj2
