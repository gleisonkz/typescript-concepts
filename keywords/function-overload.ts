namespace TS.KeyWords.Function {
  /*
 E aí você conhece o conceito de Function Overloading do TypeScript?

 Disponível no Ts desde a versão X, semelhante a bastante outras
 linguagens podemos definir uma função com o mesmo nome
 mas com parâmetros diferentes.

 No TypeScript a forma para fazer isso é declarar somente a
 assinatura dos overloads e tratas os casos na implementação principal.
*/

  // 1 overload onde aceita apenas string
  function combine(x: string, y: string): string;
  // 2 overload onde aceita apenas number
  function combine(x: number, y: number): number;
  // Utilizando o operador typeof podemos
  // tratar cada overload individualmente
  function combine(x: any, y: any): any {
    if (typeof x == "number") {
      return x + y;
    }
    return `${x} ${y}`;
  }

  const nomes = combine("João", "Ribeiro");
  const valores = combine(1, 2);
  // Aqui gera um erro pois não temos esse overload definido
  const test = combine(1, [123]);
}
