namespace TS.KeyWords.Extends {
  /*
  Adicionado ao TypeScript na versão 1.8, 
  podemos utilizar a palavra *extends* como
  uma constraint na hora de definir parâmetros genéricos.
*/

  // abaixo temos uma função genérica que mescla 2 objetos
  // que até o momento funciona perfeitamente.

  // function merge<U, V>(obj1: U, obj2: V) {
  //   return {
  //     ...obj1,
  //     ...obj2,
  //   };
  // }
  {
    let person = merge({ name: "John" }, { age: 25 });

    console.log(person);
  }

  /* 

A função merge() espera 2 objetos como parâmetros.
Porem isso não te impede de passar algo 
diferente de um objeto como abaixo. */
  {
    let person = merge({ name: "John" }, 25);

    console.log(person);
  }
  // O TypeScript não acusou nenhum erro.
  // E tivemos um resultado não esperado.

  /*
  Para evitar este tipo de problema podemos limitar
  Quais tipos podem ser passados para o nosso parâmetro. */

  function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
      ...obj1,
      ...obj2,
    };
  }

  // Como agora definimos uma constraint para o nossos parâmetros
  // Os tipos genéricos U e V apenas aceitaram o tipo object
  // E o nosso código anterior agora o TS irá acusar um erro

  let person = merge({ name: "John" }, 25);
}
