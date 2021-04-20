namespace TS.KeyWords.Extends {
  ExtractArraySubtype: {
    //Como exemplo podemos criar um type que extrai o subtipo
    // de um array

    /*======1º==========*/ //2º  3º
    type FlattenIfArray<T> = T extends Array<infer R> ? R : T;

    // 1º verifica se o generics passado é um array
    // caso seja ele extrai o seu subtipo

    // 2º se verdadeiro retorna o subtipo do tipo passado.

    // 3º se falso retorna o tipo passado

    type T1 = FlattenIfArray<number>;
    // Como o tipo não é um array number é retornado

    type T2 = FlattenIfArray<string[]>;
    // Como o tipo é um array o subtipo é extraído e retornado.
    ///2º     3º
  }

  ExtractPromiseSubtype: {
    //Também é possível fazer o mesmo para extrairmos o
    // subtipo de uma promise

    /*==============1º==========*/ type Unpromisify<T> = T extends Promise<infer SubType> ? SubType : T;

    // 1º verifica se o generics passado é uma Promise
    // caso seja ele extrai o seu subtipo

    // 2º se verdadeiro retorna o subtipo do generics passado.

    // 3º se falso retorna o próprio generics tipo passado

    type T1 = Unpromisify<number>;
    // Como o tipo não é uma promise number é retornado

    type T2 = Unpromisify<Promise<string>>;
    // Como o tipo é uma promise o subtipo é extraído e retornado.
  }
}
