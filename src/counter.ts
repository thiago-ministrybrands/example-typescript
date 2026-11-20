export class Counter {
  private value: number;

  constructor(initial = 0) {
    this.value = initial;
  }

  increment(): number {
    this.value += 1;
    return this.value;
  }

  get current(): number {
    return this.value;
  }
}
