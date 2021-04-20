namespace TS.TypeUtilities {
  {
    /* 
    E aí você o Type Utility Record do TypeScript?
    disponível a partir da versão 2.1 do TS esse é um type
    que por de baixo dos panos utilizam um Mapped Type para gerar um novo tipo
    
    Caso não saiba o que é um Mapped Type 
    confira nesse post que fiz sobre o assunto LINK:.
  
    O Record basicamente gera um novo tipo que será um objeto
    onde as chaves serão geradas a partir das chaves de um tipo existente
    e os valores será um outro Type.

    Sua assinatura é Record<Keys,Type>

    1º generics Keys: um string literal, Union de string literals, ou um Type existente
    que será usado para gerar as chaves do objeto.

    2º generics Type: Type que será utilizado como valor do objeto.

    */

    interface CatInfo {
      age: number;
      breed: string;
    }

    type CatName = "miffy" | "boris" | "mordred";
  }
}
