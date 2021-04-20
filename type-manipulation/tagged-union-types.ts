// Tagged Union Types

// Este é um recurso do TypeScript que está disponível desde a versão 2.0
// onde o compilador utiliza de uma propriedade (string literal) como "discriminator" para
// para realizar a inferência de um tipo.

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

//Definição de 3 interfaces simples e a criação de um Union a partir das 3.

function area(obj: Shape) {
  // No switch abaixo em cada case o tipo do obj é definido utilizando
  // a propriedade kind como discriminator sem a necessidade de se fazer cast.
  switch (obj.kind) {
    case "square":
      return obj.size * obj.size;
    case "rectangle":
      return obj.width * obj.height;
    case "circle":
      return Math.PI * obj.radius * obj.radius;
  }
}

// O mesmo acontece caso seja feito alguma comparação com if else.

function test1(obj: Shape) {
  if (obj.kind === "square") {
    obj; // aqui o tipo Square já é inferido
  } else {
    obj; // aqui o tipo inferido fica como um Union de Rectangle | Circle
  }
}

function test2(obj: Shape) {
  if (obj.kind === "square" || obj.kind === "rectangle") {
    return;
  }
  obj; // aqui o tipo inferido fica como Circle
}
