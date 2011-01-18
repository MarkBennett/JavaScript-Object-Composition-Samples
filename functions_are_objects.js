function foo(a, b) {
  return a * b;
}

foo(3, 4);               // 12

foo.a = "abc";
foo.a;                   // "abc"

foo.bar = function() {
  "baz"
};
foo.bar();               // "baz"