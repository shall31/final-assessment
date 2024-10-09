import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { sum } from './index.js';

test('sum', () => {
  const result = sum(2, 3);
  assert.equal(result, 5,);
});
