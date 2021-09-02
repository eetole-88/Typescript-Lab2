import HtmlGreeter from "../src/models/HtmlGreeter-Class";

describe("HtmlGreeter", () => {
  test("greet method returns greeting and name nested within h1 tags", () => {
    let greet: HtmlGreeter = new HtmlGreeter("Hello");
    expect(greet.greet("Grant")).toBe("<h1>Hello, Grant!</h1>");
  });
  test("greet method returns greeting and name nested within h1 tags", () => {
    let greet: HtmlGreeter = new HtmlGreeter("Howdy");
    expect(greet.greet("Grant")).toBe("<h1>Howdy, Grant!</h1>");
  });
  test("greet method returns greeting and name nested within h1 tags", () => {
    let greet: HtmlGreeter = new HtmlGreeter("Hello");
    expect(greet.greet("Sam")).toBe("<h1>Hello, Sam!</h1>");
  });
  test("greet method returns greeting and name w/div tags", () => {
    let greet: HtmlGreeter = new HtmlGreeter("Hello", "div");
    expect(greet.greet("Sam")).toBe("<div>Hello, Sam!</div>");
  });
});
