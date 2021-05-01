AsConstWithObject: {
  const Ranking = {
    First: "3000",
    Seconds: "2000",
    Third: "1000",
  } as const;
}

AsConstWithArray: {
  const numbers = [1, 2, "Name", 4] as const;
  const test = numbers[1];
}

AsConstWithStringLiteral: {
  let nickName = "Roger" as const;
  nickName = "Roger";
}
