import Greeter from "../src/models/Greeter-Class";

describe("Greeter class", () => {
  test("greet method returns greeting (Howdy) and name (Karla) as string", () => {
    let salutation: Greeter = new Greeter("Howdy");
    const result = salutation.greet("Karla");
    expect(result).toBe("Howdy, Karla!");
  });
  test("greet method returns greeting (Hello) and name (Mom) as string", () => {
    let salutation: Greeter = new Greeter("Hello");
    const result = salutation.greet("Mom");
    expect(result).toBe("Hello, Mom!");
  });
});
