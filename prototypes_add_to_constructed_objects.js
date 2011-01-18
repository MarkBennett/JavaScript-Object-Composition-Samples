bob = new Human("bob", 30);

bob.constructor;           // function Human() { ... }

bob.constructor.prototype; // { sayHello: ... }

bob.sayHello();            // "Hi, I'm Bob!"