namespace TS.KeyWords.Readonly {
  class Employee {
    // define a propriedade empCode como apenas leitura
    readonly empCode: number;
    empName: string;

    constructor(code: number, name: string) {
      this.empCode = code;
      this.empName = name;
    }
  }

  let emp = new Employee(10, "John");
  // Erro ao atribuir pois a propriedade 'empCode' é readonly.

  emp.empCode = 20;
  emp.empName = "Bill";
}
