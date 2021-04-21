namespace TS.TypeUtilities {
  /* 
    Type Utility NonNullable?
    disponível a partir da versão 2.8 do TypeScript esse é um type utility
    que remove os tipos null e undefined de um determinado Type.

    Sua assinatura é NonNullable<T>

    1º generics Type: o tipo do qual você quer remover null e undefined.    
 */

  type Fruits = "Apple" | "Orange" | "Pear" | null;
  type Example = NonNullable<Fruits>;

  let example: Example;
}
