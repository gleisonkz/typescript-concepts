/*
E aí, você o conceito de Class Expression no TypeScript?

Bem semelhante a declaração de uma classe comum, 
a única diferença é que eu class expression não precisar ter um nome.
apesar de podermos referencia-los por meio do identificador ao qual ele foi vinculado.

*/

const person = class {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
};

// o tipo inferido a variável personObj será person

const personObj = new person("Richard");

console.log(personObj);
console.log(personObj.name);
