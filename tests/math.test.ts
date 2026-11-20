import { describe, expect, it } from 'vitest';
import { add, isEven, subtract } from '../src/math.js';

describe('math', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('detects even numbers', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
  });
});
