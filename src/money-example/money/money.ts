import { Dollar } from './dollar';

export abstract class Money {
  constructor(protected readonly amount: number) {}

  equals(money: Money) {
    return this.amount === money.amount && this.constructor.name === money.constructor.name;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  abstract times(multiplier: number): Money;
}
