import assert from 'node:assert';
import {add, subtract} from './index.js';
assert.strictEqual(add(2, 4), 6);
assert.strictEqual(subtract(5, 3), 2);
console.log('2 tests passed');
