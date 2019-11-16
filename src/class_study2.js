class Person {
  constructor(name,age) {
    this.name = name
    this.age = age
  }
  say(){
    return '这是Person中的say方法'
  }
}


class Chinese extends Person {
  constructor(name,age,color,language){
    super(name,age)
    // super()
    this.color = color 
    this.language = language
  }
}

let p1 = new Chinese('代罔',18,'yellow','汉语')
console.log(p1);
console.log(p1.say());

