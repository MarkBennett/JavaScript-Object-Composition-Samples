function Human() {
  this.breathes = "air"; // this == a new object
  return this;           // new Human() == this
}

bob = new Human();
bob.breathes;             // "air"
bob.constructor; // function Human() { ... }
