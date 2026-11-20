import { describe, expect, it } from 'vitest';
import { Counter } from '../src/counter.js';

describe('Counter', () => {
  it('starts at zero by default', () => {
    expect(new Counter().current).toBe(0);
  });

  it('increments the value', () => {
    const counter = new Counter();
    expect(counter.increment()).toBe(1);
    expect(counter.increment()).toBe(2);
  });
});
