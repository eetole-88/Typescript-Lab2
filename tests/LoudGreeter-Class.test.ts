import LoudGreeter from "../src/models/LoudGreeter-Class";

describe("LoudGreeter", () => {
  test("greet method returns greeting and name as string with added exclamation points", () => {
    let greet: LoudGreeter = new LoudGreeter("Hello");
    greet.addVolume();
    expect(greet.greet("Grant")).toBe("Hello, Grant!!!");
  });
  test("greet method returns full greeting with an exclammation point each time addVolume() is called.", () => {
    let greet: LoudGreeter = new LoudGreeter("Hello");
    greet.addVolume();
    greet.addVolume();
    greet.addVolume();
    greet.addVolume();
    expect(greet.greet("Grant")).toBe("Hello, Grant!!!!!!");
  });
});
