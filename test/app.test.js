const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("../app");

test("greet function returns the correct message", () => {
  assert.strictEqual(greet("Akash"), "Hello, Akash!");
});