const test = require('node:test');
const assert = require('node:assert');
const { add } = require('../index');

test('add adds two numbers', () => {
  assert.strictEqual(add(1, 1), 2);
});
