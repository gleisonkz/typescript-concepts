// Unknown X Any

// In an intersection everything absorbs unknown
Intersection: {
  any: {
    type T00 = any & null;
    type T02 = any & number;
    type T03 = any & string;
    type T04 = any & string[];
  }

  unknown: {
    type T00 = unknown & null;
    type T02 = unknown & number;
    type T03 = unknown & string;
    type T04 = unknown & string[];
  }
}

// In a union an unknown absorbs everything
Union: {
  any: {
    type T00 = any | null;
    type T02 = any | number;
    type T03 = any | string;
    type T04 = any | string[];
  }

  unknown: {
    type T00 = unknown | null;
    type T02 = unknown | number;
    type T03 = unknown | string;
    type T04 = unknown | string[];
  }
}

KeyOf: {
  type T1 = keyof any;
  type T2 = keyof unknown;
}

MemberAccessing: {
  any: {
    function foo(x: any) {
      x[5];
      x();
    }
  }

  unknown: {
    function foo(x: unknown) {
      x[5];
      x();
    }
  }
}

Assignment: {
  // Anything is assignable to unknown
  function AnythingIsAssignableToUnknown<T>(pAny: any, pNever: never, pT: T) {
    let x: unknown;
    x = 123;
    x = "hello";
    x = [1, 2, 3];
    x = new Error();
    x = x;
    x = pAny;
    x = pNever;
    x = pT;
  }

  function AssignableJustToItselfAndAny(x: unknown) {
    let v1: any = x;
    let v2: unknown = x;
    let v3: object = x; // Error
    let v4: string = x; // Error
    let v5: string[] = x; // Error
    let v6: {} = x; // Error
    let v7: {} | null | undefined = x; // Error
  }
}
