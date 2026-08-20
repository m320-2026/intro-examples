class Counter {
  private count: number;

  constructor() {
    this.count = 0;
  }

  increase() {
    this.count++;
  }

  getCount(): number {
    return this.count;
  }
}

const visitors = new Counter();
visitors.increase();
visitors.increase();
visitors.increase();
console.log(visitors.getCount()); // 3
