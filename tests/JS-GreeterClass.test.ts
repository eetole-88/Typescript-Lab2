import JavaScriptGreeter from "../src/models/JS-GreeterClass";

describe("JavaScriptGreeter", () => {
  test("greet method returns greeting (Hi) and name (Grant) as string inside console.log statement", () => {
    let greet: JavaScriptGreeter = new JavaScriptGreeter("Hi");
    const result = greet.greet("Grant");
    expect(result).toBe("console.log('Hi, Grant!')");
  });
  test("greet method returns greeting (Hola) and name (mijo) as string inside console.log statement", () => {
    let greet: JavaScriptGreeter = new JavaScriptGreeter("Hola");
    const result = greet.greet("mijo");
    expect(result).toBe("console.log('Hola, mijo!')");
  });
});
