{
  let foo: { [index: string]: { message: string } } = {};

  foo["a"] = { message: "some message" };
  foo["a"] = { messages: "some message" };

  foo["a"].message;
  foo["a"].messages;
}
