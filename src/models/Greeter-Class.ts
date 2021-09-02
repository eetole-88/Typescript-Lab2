export default class Greeter {
  // list of properties
  greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  }

  // this method gets data from two sources:
  //  - the class (gretting property)
  //  - a parameter (name parameter)
  greet(name: string): string {
    // property uses this.  / parameter does not
    return `${this.greeting}, ${name}!`;
  }
}
