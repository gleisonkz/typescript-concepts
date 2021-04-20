namespace TS.TypeUtilities {
  /* 
    E aí você os Type Utilities Partial e Readonly do TypeScript?
    disponíveis a partir da versão 2.1 do TS esse são dois types
    que por de baixo dos panos utilizam um Mapped Type para gerar um novo tipo
    caso não saiba o que é um Mapped Type confira nesse post que fiz sobre o assunto.
  
    Partial: torna todas as chaves de um tipo opcionais.  
  
  */

  interface Person {
    name: string;
    age: number;
  }

  let partialPerson: Partial<Person>;
}
