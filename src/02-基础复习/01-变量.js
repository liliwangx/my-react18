/*
  优先使用const;  如果希望变量可以改变，用let;  尽量不用 var

  var：全局变量，没有块级作用域；变量提升
  let：局部变量，块级作用域
  const：常量:
        和let类似，有块级作用域，但是只能赋值一次
        使用场景：
          1. 对于一些常量，可以使用const声明
          2. 对于一些对象（函数），也可以使用const声明，这样可以避免对象（函数）被意外修改
*/
{
  let a = 10;
}
// console.log(a); // 会报错 'a' is not defined

for (let i = 0; i < 5; i++) {
  console.log("循环内部--->", i);
}

(function () {
  if (false) {
    var a = 11;
  }
})();

if (true) {
  var b = 33;
  let c = 55;
}
console.log(b); // 33
// console.log(c); // 会报错 'c' is not defined

const ENV = "UAT"; // 常量, 不可修改
// ENV = "111"; // 会报错  Uncaught TypeError: Assignment to constant variable.

const obj = { name: "Lili", age: 18 };
// obj = { name: "DALI", age: 18 }; // 会报错， 这个使给obj 重新赋值
obj.age = 20;
console.log(obj.age); // 20

const fn = function () {};
