function foo(a, b) {
  return a * b;
}

foo.prototype;              // {}

foo.prototype.test = 123;
foo.test;                   // undefined