/*
O TypeScript tem por padrão um tipo chamado ReadonlyArray<T> que é o mesmo 
que um Array<T> porém com todos os métodos que realização mutação removidos, 
para que você possa ter certeza de não alterar seus arrays após a criação:

*/

const numbers: number[] = [1, 2, 3, 4];
const readonlyNumbers: ReadonlyArray<number> = numbers;

readonlyNumbers[0] = 12; // error!
// Index signature in type 'readonly number[]' only permits reading.
readonlyNumbers.push(5); // error!
// Property 'push' does not exist on type 'readonly number[]'.
readonlyNumbers.length = 100; // error!
// Cannot assign to 'length' because it is a read-only property.
numbers = readonlyNumbers; // error!
// The type 'readonly number[]' is 'readonly' and cannot
// be assigned to the mutable type 'number[]'.
