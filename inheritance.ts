class Person {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  describe(): string {
    return `Person ${this.fullName()}`;
  }
}

class Employee extends Person {
  private company: string;
  private boss?: Employee;

  constructor(
    firstName: string,
    lastName: string,
    company: string,
    boss?: Employee,
  ) {
    super(firstName, lastName);
    this.company = company;
    this.boss = boss;
  }

  describe(): string {
    const description = `Employee ${super.fullName()} working at ${this.company}`;
    if (this.boss != null) {
      return `${description} (under ${this.boss.describe()})`;
    } else {
      return description;
    }
  }
}

class Customer extends Person {
  private revenue: number;

  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
    this.revenue = 0.0;
  }

  bookSell(amount: number) {
    this.revenue += amount;
  }

  describe(): string {
    return `Customer ${super.fullName()} worth ${this.revenue}`;
  }
}

const ceo = new Employee("Biff", "Webster", "ACME Inc.", null);
const janitor = new Employee("Joe", "Doe", "ACME Inc.", ceo);
console.log(ceo.describe());
console.log(janitor.describe());

const customer = new Customer("Jane", "Done");
customer.bookSell(99.99);
customer.bookSell(49.99);
customer.bookSell(14.99);
console.log(customer.describe());
