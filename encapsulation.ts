class FullName {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public formatDefault(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public formatSwiss(): string {
    return `${this.lastName}, ${this.firstName}`;
  }
}

const joe = new FullName("Joe", "Doe");
const jane = new FullName("Jane", "Done");
console.log(joe.formatDefault()); // Joe Doe
console.log(jane.formatSwiss()); // Done, Jane
