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

  it('resets to the initial value', () => {
    const counter = new Counter();
    counter.increment();
    expect(counter.reset()).toBe(0);
    expect(counter.current).toBe(0);
  });

  it('resets to a custom initial value', () => {
    const counter = new Counter(5);
    counter.increment();
    expect(counter.reset()).toBe(5);
  });
});
