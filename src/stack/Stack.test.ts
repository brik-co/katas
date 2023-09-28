import { expect, test, describe } from 'vitest';
import { Stack, StackFullError } from './Stack';

describe('Stack', () => {
  describe('isEmpty should', () => {
    test('return true for a new stack', () => {
      const stack = new Stack();

      expect(stack.isEmpty()).toEqual(true);
    });

    test('return false if elements have been added to the stack', () => {
      const stack = new Stack();

      stack.push('uno');

      expect(stack.isEmpty()).toEqual(false);
    });

    test('return true if all elements have been removed from the stack', () => {
      const stack = new Stack();

      stack.push('uno');
      stack.pop();

      expect(stack.isEmpty()).toEqual(true);
    });
  });

  describe('push should', () => {
    test('add an element to the top of the stack', () => {
      const stack = new Stack();

      stack.push('hey');
      stack.push('you');

      expect(stack.top()).toEqual('you');
    });

    test('throw if the stack is full', () => {
      const stack = new Stack(1);

      stack.push('hey');

      expect(() => stack.push('you')).toThrow(StackFullError);
    });
  });

  describe('pop should', () => {
    test('return the top element from the stack', () => {
      const stack = new Stack();

      stack.push('this');
      stack.push('is');
      stack.push('stack');

      expect(stack.pop()).toEqual('stack');
    });

    test('remove the top element from the stack', () => {
      const stack = new Stack();

      stack.push('this');
      stack.push('is');
      stack.push('stack');

      stack.pop();

      expect(stack.top()).toEqual('is');
    });

    test('return undefined if there is nothing in the stack', () => {
      const stack = new Stack();

      expect(stack.pop()).toEqual(undefined);
    });
  });

  describe('top should', () => {
    test('return the top element from the stack', () => {
      const stack = new Stack();

      stack.push('this');
      stack.push('top');

      expect(stack.pop()).toEqual('top');
    });

    test('return undefined if there is nothing in the stack', () => {
      const stack = new Stack();

      expect(stack.top()).toEqual(undefined);
    });
  });

  describe('isFull should', () => {
    test('return false is there is space left in the stack', () => {
      const stack = new Stack(10);

      expect(stack.isFull()).toEqual(false);
    });

    test('return true if the stack does not have any more capacity', () => {
      const stack = new Stack(1);

      stack.push('full');

      expect(stack.isFull()).toEqual(true);
    });
  });
});
