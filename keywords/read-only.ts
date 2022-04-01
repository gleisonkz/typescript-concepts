namespace TS.KeyWords.Readonly {
  Assignment: {
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
    emp.empCode = 20; // Erro ao atribuir pois a propriedade 'empCode' é readonly.
    emp.empName = "Bill";
  }

  Initialization: {
    class Employee {
      readonly empCode: number;
      empName: string;

      constructor(code: number, name: string) {
        this.empName = name;
      }
    }
  }
}
