class Employee {
  // Заповніть модифікатори доступу
  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) {}

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary);

    salary += 10000;
  }
}

const manager = new Manager("Bob", "dep", 5000);

export {};
