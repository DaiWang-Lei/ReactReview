import React from 'react'

function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  return '我是构造函数的say方法';
}
Person.info = 123
let p1 = new Person('代罔', 18)
console.log(p1);
console.log(p1.say());
console.log(Person.info);





class Per {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  say() {
    return '我是类的say方法';
  }

  static info = 456
  static Hello(){
    return 'Hello'
  }
}
let p2 = new Per('雷雷', 17)
console.log(p2);
console.log(p2.say());
console.log(Per.info);
console.log(Per.Hello());




