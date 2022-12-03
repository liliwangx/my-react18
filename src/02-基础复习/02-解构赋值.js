let a, b;
let arr = ["可乐", "薯条"];

// 方法一： 传统写法
// a = arr[0];
// b = arr[1];

// 方法二: 解构赋值
[a, b] = arr;

// 方法三： 声明时就赋值, 常用的方式
// const [a, b] = arr;

console.log(a, b); // 可乐 薯条

function fn() {
  return ["汉堡", "炸鸡", "冰淇淋"];
}

const [A, B] = fn();
console.log(A, B); //汉堡 炸鸡

let arrF = ["AA", "BB", "CC", "DD"];
const [q, w, e] = arrF;
console.log(q, w, e); // AA BB CC

// ...变量，会接收后面所有的元素，返回一个新数组
const [m, n, ...p] = arrF;
console.log(m, n, p); // AA BB (2) ['CC', 'DD']

// 对象解构
const objA = {
  name: "快乐水",
  age: 8,
  gender: "男",
};

let a1, b1, c1;

// ({name: a1, age: b1, gender: c1}) = objA // 分别将属性分别赋值

// 如果变量名和属性名一致，则可以写一个    推荐
const { name, age, gender } = objA;
console.log(name); // 快乐水

// 利用数组的解构，来交换两个变量的位置
let x = 10,
  y = 20;
console.log(x, y); // 10 20

// 前面是解构，后面是赋值
[x, y] = [y, x];
console.log(x, y); // 20 10

// 交换数组中2个元素的位置
let arrQ = [1, 3, 2];
[arrQ[1], arrQ[2]] = [arrQ[2], arrQ[1]];
console.log(arrQ); // (3) [1, 2, 3]
