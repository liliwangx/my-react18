// 数组
const arr = [1, 2, 3, 4, 5, 6];

/*
  map()
    可以根据原有数组返回一个新数组
    需要一个回调函数作为参数，回调函数的返回值会成为新数组中的元素
    回调函数中有3个参数
      1. 当前元素
      2. 当前元素的索引
      3. 当前数组

  filter()
    可以从一个数组中获得符合条件的元素
    会根据回调函数的结果来决定是否保留元素，true 保留  false 不保留

  find()
    可以从一个数组中获得符合条件的第一个元素

  reduce()
    可以用来合并数组中的元素；对数组中的值进行计算，最终将数组中的所有元素合并为一个值
    需要2个参数
      1. 回调函数中有4个参数
        1. 前一个值：prev
        2. 当前值: current
        3. 当前索引: index
        4. 当前数组: array
      2.指定初始值
*/

let result = arr.map((item) => item * 2);
console.log(result); // [2, 4, 6, 8, 10, 12]
let result2 = arr.map((item, index, array) => item + 2);

const arr2 = ["翠花", "狗蛋儿", "栓柱儿"];

let result3 = arr2.map((item, index) => `<li>${item}</li>`);
console.log(result3);

const arr3 = [2, 3, 4, 5, 6];
let result4 = arr3.filter((item) => item % 2 === 0);
console.log(result4); //  [2, 4, 6]

let result5 = arr3.find((item) => item % 2 === 0);
console.log(result5); // 2

// 0 是指定的初始值
let result6 = arr3.reduce((prev, current, index, array) => {
  return prev + current;
}, 0);
console.log(result6); // 20   (2+3+4+5+6)
