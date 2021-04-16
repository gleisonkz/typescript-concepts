// Indexable Types

// Esses tipos possuem um index signature que descreve
// os tipos que podemos usar para indexar um objeto,
// junto com os tipos de retorno correspondentes durante a indexação.

// São bastante úteis quando queremos tipar um dicionário.

interface NumDic {
  [index: string]: number;
  length: number; // ok, pois length retorna um number
  name: string; // como o index signature define o tipo de retorno como number
  // aqui ocorre um erro
}

// Também podemos utilizar um index signature de um Union.

type NumStrDic = {
  [index: string]: number | string;
  length: number; // ok, pois length retorna um number
  name: string; // ok, pois name retorna uma  string
};

const dic1: NumStrDic = { length: 2, name: "dic", newKey: "" };
// Veja que foi possível adicionar uma nova prop pois ela
// está de acordo com a index signature

const dic2: NumStrDic = { length: 2, name: "dic", newKey: {} };
// aqui gera um erro pois o tipo '{}'
// não atende o que foi defino na index signature que é 'string | number'.

// Também é possível utilizar modificadores de acesso como o readonly

interface ReadonlyDic {
  readonly [index: number]: string;
}

let myArray: ReadonlyDic = ["Alice", "Bob"];
myArray[2] = "Mallory";

// Erro pois o index signature foi definido com readonly

interface Person {
  name: string;
  age: number;
}

type Column<T> = {
  [Key in keyof T]: T[keyof T];
} & { optional?: string };

const obj: Column<Person> = {
  name: "",
  age: 12,
};

type OtherDic = {
  [index: string]: number;
};
