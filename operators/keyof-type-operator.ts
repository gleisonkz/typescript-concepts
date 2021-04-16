{
  //retorna uma string ou um Union  das chaves de um determinado tipo.

  type Point = { x: number; y: number };
  type PointKeys = keyof Point;
  // Veja que foi possível recuperarmos todas as chaves de Point
  //const obj: PointKeys =

  // caso o tipo tenha um index signature de string ou number
  // o keyof irá retornar o tipo definido no index signature.

  type IndexSig = { [n: number]: boolean };

  type N = keyof IndexSig;

  // aqui o tipo inferido para o type N é number

  const b: N = 2;
}
