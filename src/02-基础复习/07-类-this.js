/*
  类中的所有代码，都会在严格模式下执行
    严格模式下，它的一个特点是：函数的this不再是window，而是undefined
  
  注意：
    在类中，方法的this不是固定的
      以方法形式调用时，this就是当前的实例
      以函数形似调用，this 是undefined

    开发时，在有些场景下，我们希望方法中this是固定的，不因为调用方式不同而改变
      如果遇到上述需求，可以使用箭头函数来定义类中的方法
      如果类中的方法，是以箭头函数定义的，则方法中的this永远是当前实例，不会改变

*/

class MyClass {
  constructor() {
    // 将fn方法的this，绑定为当前实例
    // this.fn = this.fn.bind(this);
  }

  // fn() {
  //   console.log("fn--", this);
  // }

  fn = () => {
    console.log("fn--箭头函数--", this);
  };
}

const mc = new MyClass();
const test = mc.fn;

// 类的方法，以方法的形式执行，this就是调用方法的对象，即实例
// mc.fn(); // fn-- MyClass {fn: ƒ}   this -> mc
// 类的方法，以函数形式执行， this -> undefined
// test(); // fn-- undefined

// bind(this)
// mc.fn(); // fn-- MyClass {fn: ƒ}   this -> mc
// test(); // fn-- MyClass {fn: ƒ}   this -> mc

// 箭头函数
mc.fn(); // fn--箭头函数-- MyClass {fn: ƒ}   this -> mc
test(); // fn--箭头函数-- MyClass {fn: ƒ}   this -> mc
