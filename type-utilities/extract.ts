namespace TS.TypeUtilities {
  /* 
    Type Utility Extract?
    disponível a partir da versão 2.8 do TypeScript esse é um type
    que por de baixo dos panos utilizam um Mapped Type para gerar um novo tipo

    Caso não saiba o que é um Mapped Type 
    confira nesse post que fiz sobre o assunto LINK:.         

    Sua assinatura é Exclude<Type, Union>

    1º generics Type: o tipo do qual você quer extrair algum membro.
    2º generics Union: um union com os tipos a serem usados na comparação 
 */

  type Fruits = "Apple" | "Orange" | "Pear";
  type Example = Extract<Fruits, "Pear">;

  let fruit: Example;
}
