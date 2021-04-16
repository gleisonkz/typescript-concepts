{
  interface Animal {
    live(): void;
  }

  interface Dog extends Animal {
    woof(): void;
  }

  type Example1 = Dog extends Animal ? number : string;
  //  Aqui Example1 será do tipo number
  //  pois Dog é um subtipo de Animal

  type Example2 = RegExp extends Animal ? number : string;
  //  Aqui Example2 será do tipo string
  //  pois RegExp não é um subtipo de Animal
}
{
  // também é possível encadear varias condições
  type TypeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : T extends undefined
    ? "undefined"
    : T extends Function
    ? "function"
    : "object";

  type T0 = TypeName<string>;

  type T1 = TypeName<"a">;

  type T2 = TypeName<true>;

  type T3 = TypeName<() => void>;

  type T4 = TypeName<string[]>;

  type T5 = TypeName<32>;

  var a: T1;
  var b: T2;
  var c: T3;
  var d: T4;
  var e: T0;
  var f: T5;
}
