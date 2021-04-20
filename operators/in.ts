namespace TS.Operators {
  interface Person {
    name: string;
    age: number;
  }
  type Partial2<T> = {
    [P in keyof T]?: T[P]; // P will be each key of T
  };
  type PersonPartial = Partial<Person>; // sa
}
