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
    const isArray = Array.isArray(value);
    const isObject = typeof value === "object";

    if (isArray) {
      for (const prop of value as []) {
        snakeToCamelCaseObject(prop);
      }
      continue;
    }

    if (isObject) {
      snakeToCamelCaseObject(value);
      continue;
    }
    const newPropertyName = snakeToCamelCase(propertyName);
    const originalValue = (obj as any)[propertyName];
    delete (obj as any)[propertyName];
    (obj as any)[newPropertyName] = originalValue;
  }

  return obj as unknown as SnakeToCamelCaseAdapter<T>;
}

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
