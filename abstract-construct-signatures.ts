// Abstract Construct Signatures

// Pode ocorrer de você querer restringir o parâmetro de uma função
// para apenas aceitar um argumento que seja o construtor de uma classe
// que retorne uma instância de uma classe que derive de uma classe abstrata

// utilizando o Abstract Construct Signatures é possível atingir isso.

abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

class Derived extends Base {
  getName() {
    return "world";
  }
}

class OtherClass {
  getName() {
    return "world";
  }
}

function greet(ctor: new () => Base) {
  const instance = new ctor();
  instance.printName();
}

//greet(Base); // Erro pois na função foi definido que o construtor não deve ser abstrato
//greet(OtherClass); // Erro pois está classe não é derivada de Base
greet(Derived);
