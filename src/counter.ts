export class Counter {
  private value: number;
  private readonly initial: number;

  constructor(initial = 0) {
    this.initial = initial;
    this.value = initial;
  }

  increment(): number {
    this.value += 1;
    return this.value;
  }

  reset(): number {
    this.value = this.initial;
    return this.value;
  }

  get current(): number {
    return this.value;
  }
}
