import { Dollar } from './dollar';
import { Franc } from './franc';
import { Money } from './money';

describe('Money', () => {
  it('multiples a dollar amount', () => {
    const five = Money.dollar(5);

    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  it('multiples a franc amount', () => {
    const five = new Franc(5);

    expect(five.times(2)).toEqual(new Franc(10));
    expect(five.times(3)).toEqual(new Franc(15));
  });

  it('returns true if two francs have the same value', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    
    expect(new Franc(5).equals(new Franc(5))).toBe(true);
    expect(new Franc(5).equals(new Franc(6))).toBe(false);

    expect(new Dollar(5).equals(new Franc(5))).toBe(false);
  });
});
