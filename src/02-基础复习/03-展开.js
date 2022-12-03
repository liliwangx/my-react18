function fn(a, b, c) {
  return a + b + c;
}

const arr = [1, 2, 3];

// 计算数组中3个数字的和
// let result = fn(arr[0], arr[1], arr[2]);

// 通过  ... 展开一个数组
let result = fn(...arr);
console.log(result); // 6

// 将arr浅复制给arr2，并添加 4 5 6
const arr2 = [...arr, 4, 5, 6];
console.log(arr2);

// 展开对象
const obj = {
  name: "QQ",
  age: 18,
};

// 将obj浅复制给obj2
const obj2 = { ...obj };
console.log(obj2);

const obj3 = { type: "A", ...obj };
console.log(obj3); // {type: 'A', name: 'QQ', age: 18}

const obj4 = { name: "WW", ...obj };
console.log(obj4); // {name: 'QQ', age: 18}

// 相同属性名，后面的会把前面的值覆盖
const obj5 = { ...obj, name: "MM" };
console.log(obj5); // {name: 'MM', age: 18}
