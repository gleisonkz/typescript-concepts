namespace TS.TypeUtilities {
  {
    /* 
    E aí você os Type Utilities Partial e Readonly do TypeScript?
    disponíveis a partir da versão 2.1 do TS esse são dois types
    que por de baixo dos panos utilizam um Mapped Type para gerar um novo tipo
    caso não saiba o que é um Mapped Type confira nesse post que fiz sobre o assunto.  
    
    Readonly: torna todas as chaves de um tipo readonly.
  
    */
    interface Person {
      name: string;
      age: number;
    }

    const readOnlyPerson: Readonly<Person> = {
      age: 12,
      name: "Stark",
    };

    // erro pois todas as props de Person
    // agora são readonly
    // readOnlyPerson.age = 2;
    // readOnlyPerson.name = "Tony";
  }
}
