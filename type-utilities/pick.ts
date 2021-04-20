namespace TS.TypeUtilities {
  /* 
    E aí você o Type Utility Pick do TypeScript?
    disponível a partir da versão 2.1 do TS esse é um type
    que por de baixo dos panos utilizam um Mapped Type para gerar um novo tipo
    
    Caso não saiba o que é um Mapped Type 
    confira nesse post que fiz sobre o assunto LINK:.
  
    O Pick basicamente gera um novo tipo a partir de
    um conjunto de membros de outro tipo.

    Sua assinatura é Pick<Type, Keys>

    1º generics Type: o tipo do qual você quer pegar algum membro.
    2º generics Keys: uma string literal ou um Union de string literals
    */

  interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    completeTodo: () => void;
  } /*======2º==========*/

  /*1º*/ type TodoPreview = Pick<Todo, "title" | "completed">;

  let todo: TodoPreview;
}
