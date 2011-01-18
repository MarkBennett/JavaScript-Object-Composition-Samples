function Animal() {
  this.breathes = "air";
}

function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype = new Animal();

bob = new Human("bob", 30);
bob.breathes;        // "air"

bob.constructor;     // function Animal() { ... }

Human.prototype.constructor = Human;

bob.constructor;     // function Human() { ... }