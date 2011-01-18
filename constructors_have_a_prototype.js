function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype;              // {}

Human.prototype.sayHello = function() {
  return "Hi, I'm " + this.name + "!";
}

Human.sayHello;     // undefined

bob = new Human("bob", 30);

bob.sayHello();     // "Hi, I'm Bob!"