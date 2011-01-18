function Human() {
  this.breathes = "air"; // this is a new object
  return this;           // new Human() returns this
}

bob = new Human();
bob.breathes;             // "air"
bob.constructor; // function Human() { ... }
