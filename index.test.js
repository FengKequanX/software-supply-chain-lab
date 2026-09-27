const test = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('./index.js');

test('greets Alice', () => {
  assert.equal(greet('Alice'), 'Hello, Alice!');
});

test('greets Bob', () => {
  assert.equal(greet('Bob'), 'Hello, Bob!');
});