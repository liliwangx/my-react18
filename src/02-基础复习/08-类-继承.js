class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say = () => {
    console.log("Dog - 汪汪");
  };
}

class Snake {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say = () => {
    console.log("Snake - 嘶嘶");
  };
}

// 如上2个class, 大部分是一样的，只是类名，方法执行的内容不一样，因此可以抽离出来一个父类，使用继承实现差异化

// 将多个类中的重复代码提取出来
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say = () => {
    console.log("动物在讲话");
  };
}

/*
  通过继承可以使得类中拥有其他类中的属性和方法
  使用extends来继承一个类，继承后就相当于将该类的代码复制到了当前类中
  当我们使用继承后，被继承类称为父类，继承父类的类，称为子类
  子类继承父类后，将获得父类中所有的属性和方法
    也可以通过创建同名的方法来对父类方法进行重写
*/

class Dog1 extends Animal {
  say = () => {
    console.log("汪汪");
  };
}

class Snake1 extends Animal {
  // 修改属性，在构造函数 constructor 中修改
  // 当我们在子类中重写父类构造函数时，必须在子类构造函数中第一时间调用父类构造函数，否则会报错
  // 报错 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  constructor(name, age, length) {
    super(name, age); // 调用父类的构造函数，如果需要用的父类的属性，需要添加上
    this.l = length;
  }
  say = () => {
    console.log("嘶嘶");
  };
}

const dog = new Dog1("狗蛋儿", 2);
console.log(dog.name, dog.age); // 狗蛋儿 2
// dog.say(); // 动物在讲话

// 重写后
// dog.say(); // 汪汪

const snake = new Snake1("小花蛇", 3);
console.log(snake.name, snake.age); // 小花蛇 3
