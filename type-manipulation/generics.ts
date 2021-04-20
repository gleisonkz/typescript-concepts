namespace TS.TypeManipulation {
  {
    function makeFullName<T extends { firstName: string; lastName: string }>(obj: T) {
      return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`,
      };
    }

    const fullName = makeFullName({ firstName: "bob", lastName: "junior", age: 12 });
  }
}
