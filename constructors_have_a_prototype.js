function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype;      // {}

Human.prototype.sayHello = function() {
  return "Hi, I'm " + this.name + "!";
};

Human.sayHello;       // undefined