namespace TS.TypeUtilities {
  /* 
    Type Utility Exclude?
    disponível a partir da versão 2.8 do TypeScript esse é um type
    que por de baixo dos panos utilizam um Mapped Type para gerar um novo tipo

    Caso não saiba o que é um Mapped Type 
    confira nesse post que fiz sobre o assunto LINK:.         

    Sua assinatura é Exclude<Type, ExcludedUnion>

    1º generics Type: o tipo do qual você quer excluir algum membro.
    2º generics ExcludedUnion: um union com os tipos que devem ser removidos 
 */

  type Fruits = "Apple" | "Orange" | "Pear";
  type Example = Exclude<Fruits, "Pear">;

  let todo: Example;
}
