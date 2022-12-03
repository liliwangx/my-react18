/*
类：
  类是对象的模板
  类决定了一个对象中包含了哪些属性和方法
  使用class关键字来定义一个类
*/
class Person {
  // 可以直接在类中定义属性; 直接定义的话，值就写死了
  name = "Lili";
  age = 18;

  // 动态设置属性
  // 2. 构造函数
  // 当我们通过new 创建对象时，实际上就是在调用类的构造函数
  // constructor(...args) {
  //   // console.log("constructor-执行了");
  //   console.log("constructor-执行了", args);
  // }
  constructor(name, age) {
    // 将参数name 赋值给对象中的属性name
    // 在构造函数中，可以通过this 来引用当前的对象
    this.name = name;
    this.age = age;
  }

  // 1. 定义实例方法
  run() {
    console.log("run-跑");
  }
}

const per3 = new Person("DALI", 20);
const per4 = new Person("QQ", 20);
console.log(per3); // Person {name: 'DALI', age: 20}
console.log(per4); // Person {name: 'QQ', age: 20}

// new Person(); // constructor-执行了
// new Person(1, 2, 3); // constructor-执行了  (3) [1, 2, 3]

// const per = new Person();
// const per2 = new Person();

// console.log(per); // Person {name: 'Lili', age: 18}
// console.log(per2); // Person {name: 'Lili', age: 18}
// console.log(per === per2); // false
// per.run(); // run-跑
