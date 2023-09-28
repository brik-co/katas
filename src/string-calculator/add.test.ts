import { expect, test, describe } from 'vitest';
import { add } from './add';

describe('add should', () => {
  test('return 0 when given an empty string', () => {
    expect(add('')).toEqual(0);
  });

  test('return the number if given one number', () => {
    expect(add('1')).toEqual(1);
  });

  test('return the sum of two numbers', () => {
    expect(add('1,2')).toEqual(3);
  });
});
