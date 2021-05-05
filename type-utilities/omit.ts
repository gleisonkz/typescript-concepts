namespace TS.TypeUtilities {
  /* 
      Type Utility Omit?
      disponível a partir da versão 3.5 do TypeScript esse é um type
      que  constrói um novo type escolhendo todas as propriedades do primeiro generics e,
      em seguida, removendo as chaves passadas no segundo generics.      
  
      Sua assinatura é Omit<Type, Keys>
  
      1º generics Type: o tipo do qual você quer omitir algum membro.
      2º generics Keys: um string literal ou union de string literal com as chaves a serem removidas 
   */

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }

  type TodoPreview = Omit<Todo, "description">;
  let todoPreview: TodoPreview;

  type TodoInfo = Omit<Todo, "completed" | "createdAt">;
}
export {};
