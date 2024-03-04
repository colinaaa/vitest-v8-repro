export class Foo {
  // Replace this with `static Baz = require.resolve("./loader.js")` will not cause error
  static Baz =
    process.env["NODE_ENV"] === "test"
      ? require.resolve("./loader.js")
      : require.resolve("../loader.js");

  // Remove this will not cause error
  static Bar = {};
}
