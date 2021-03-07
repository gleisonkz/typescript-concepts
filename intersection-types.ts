/*
Intersection Types  é um recurso que foi Introduzido no TypeScript a partir da versão 1.6.
Ele é utilizado para representar um "novo tipo" que é definido 
a  partir da interseção de 2 ou mais tipos, utilizando o sinal de & como separador.*/

type Printable = {
  print: () => void;
};
interface Disposable {
  dispose: () => void;
}
type Taxable = {
  total: number;
  calculateTax: (value: number) => number;
};

/*Aqui estamos definindo que o obj deve conter tudo
que existe nos 3 tipos da interseção

obs: repare que é possível fazer intersection
tanto com type aliases e/ou interfaces
*/
let obj: Printable & Disposable & Taxable;
obj.dispose = () => console.log("disposed");
obj.print = () => console.log("printed");
obj.calculateTax = (value: number) => value * 1.5;
obj.total = 45;
