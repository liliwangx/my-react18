/*
  直接通过类调用的属性和方法被称为静态属性和静态方法


*/

class MyClass {
  // 使用static开头的属性是静态属性，方法是静态方法
  static age = 11;
  name = "haha";

  static func = () => {
    // 注意：静态方法this不是实例对象，而是当前的类对象
    console.log("static func");
    console.log(this); // 当前 class
    /*
      class MyClass {
        constructor() {
          this.name = "haha";
          this.fn = () => {
            console.log("函数");
          };
        }
      }
    */
  };

  fn = () => {
    console.log("函数");
  };
}

const mc = new MyClass();

console.log(mc.name); // haha
console.log(MyClass.age); // 11
MyClass.func(); // static func
