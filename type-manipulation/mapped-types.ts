/*
 E aí você conhece os Mapped Types do TypeScript?

 Este é um recurso que está disponível desde a versão 2.1 do TypeScript
 e é muito util para evitar que fiquemos repetindo a criação de tipos 
 que podem ser baseados em outros tipos.

 Os Mapped Types são criados utilizando index signatures (caso não conheça fiz um post onde mencionei isso nesse link encurtador.com.br/cmEKX )

 os Mapped Types são basicamente tipos genéricos que usa um Union que é criado
 a partir do uso palavra chave in + keyof para iterar sobre as chaves de um tipo para criar outro.
*/
{
  // podemos utilizar um Mapped Type por exemplo
  // para gerar um novo tipo baseado
  // nos valores do type Keys abaixo

  type Keys = "darkMode" | "active" | "updateView";
  type Flags = { [K in Keys]: boolean };
  let flags: Flags;

  // também é possível tornamos o Mapped Type genérico

  type Events = "click" | "blur" | "hover";

  type GenericFlags<T extends string> = { [K in T]: boolean };

  let gFlags: GenericFlags<Keys>;
  let gEvents: GenericFlags<Events>;
}

// também é possível gerar um novo type baseada nas
// chaves de um Type ou Interface existente

interface Person {
  name: string;
  age: number;
}
//=========1========//  //=====2===//
type LazyPerson = { [Keys in keyof Person]?: Person[Keys] };
let lPerson: LazyPerson;

// No ponto 1 estamos iterando sobre todas as chaves
// existentes da interface Person

//No ponto 2 recuperamos o tipo da propriedade

//obs: hoje já existe o Type Utility Partial<T>
// que funciona da mesma forma porem genérico

// A maioria dos Types Utilities do TS
// usa Mapped Types por debaixo dos panos
// Caso tenha ficado curioso em como poderíamos deixar o nosso
// type genérico, podemos fazer da seguintes forma:

// =======1=====//  //=2=//
type Lazy<T> = { [Key in keyof T]?: T[Key] };
let lPerson2: Lazy<Person>;

// No ponto 1 estamos iterando sobre todas as chaves
// existentes do tipo genérico e deixando elas opcionais

//No ponto 2 recuperamos o tipo da propriedade do generics
