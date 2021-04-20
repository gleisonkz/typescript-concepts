export interface Person {
  pessoa_id: number;
  is_bot: boolean;
  first_name: string;
  last_name: string;
  principal_address: Address;
  contacts: Contacts[];
}

export interface Address {
  id: string;
  principal_street: string;
  is_state: string;
}

export interface Contacts {
  id: number;
  phone_number: string;
}

type SnakeToCamelCase<Key extends string> = Key extends `${infer T}_${infer U}`
  ? `${Lowercase<T>}${Capitalize<SnakeToCamelCase<U>>}`
  : Key;

type SnakeToCamelCaseAdapter<T> = {
  [Key in keyof T as SnakeToCamelCase<Key & string>]: T[Key] extends string
    ? T[Key]
    : T[Key] extends Array<infer InnerType>
    ? SnakeToCamelCaseAdapter<InnerType>[]
    : SnakeToCamelCaseAdapter<T[Key]>;
};

function snakeToCamelCaseObject<T>(obj: T): SnakeToCamelCaseAdapter<T> {
  const snakeToCamelCase = (key: string) => {
    return key.replace(/_([a-z])/g, (m) => m[1].toUpperCase());
  };

  for (const propertyName in obj) {
    const value: Object = obj[propertyName];

    if (value?.constructor?.name == "Array") {
      for (const prop of value as []) {
        snakeToCamelCaseObject(prop);
      }
    } else if (value?.constructor?.name == "Object") {
      snakeToCamelCaseObject(value);
    } else {
      const newPropertyName = snakeToCamelCase(propertyName);
      const originalValue = (obj as any)[propertyName];
      delete (obj as any)[propertyName];
      (obj as any)[newPropertyName] = originalValue;
    }
  }

  return (obj as unknown) as SnakeToCamelCaseAdapter<T>;
}

const objInSnakeCase: Person = {
  pessoa_id: 1,
  is_bot: false,
  first_name: "C3P0",
  last_name: "Raw",
  principal_address: {
    id: "5",
    is_state: "2",
    principal_street: "1",
  },
  contacts: [{ id: 99, phone_number: "1236" }],
};

const objInCamelCase = snakeToCamelCaseObject(objInSnakeCase);
console.log(objInCamelCase.contacts);
console.log(objInCamelCase.contacts[0].id);
