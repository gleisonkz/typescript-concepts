// Estendendo tipos primitivos
class CustomArray extends Array<number> {
  //....
}
class CustomError extends Error {
  //....
}

// Extend computed base class
class ThingA {
  getGreeting() {
    return "Hello from A";
  }
}
class ThingB {
  getGreeting() {
    return "Hello from B";
  }
}
interface Greeter {
  getGreeting(): string;
}
interface GreeterConstructor {
  new (): Greeter;
}
function getGreeterBase(): GreeterConstructor {
  return Math.random() >= 0.5 ? ThingA : ThingB;
}
class Test extends getGreeterBase() {
  sayHello() {
    console.log(this.getGreeting());
  }
}
