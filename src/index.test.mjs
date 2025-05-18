import test from "node:test";
import assert from "node:assert";
import { add } from "./index.mjs";

test("add adds two numbers", () => {
  assert.strictEqual(add(1, 1), 2);
});
