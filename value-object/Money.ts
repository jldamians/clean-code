enum Currencies {
  USD = 'USD',
  PEN = 'PEN',
}

class Money {
  private _amount: number;
  private _currency: Currencies;

  public static usd(amount: number) {
    return new this(amount, Currencies.USD);
  }

  public static pen(amount: number) {
    return new this(amount, Currencies.PEN);
  }

  constructor(amount: number, currency: Currencies) {
    this._amount = amount;
    this._currency = currency;
  }

  public get amount(): number {
    return this._amount;
  }

  public get currency(): Currencies {
    return this._currency;
  }

  public addAmount(amount: number): Money {
    return new Money(this.amount + amount, this.currency);
  }

  public equals(money: Money): boolean {
    if (this.currency !== money.currency) {
      return false;
    }

    return this.amount === money.amount;
  }
}

const money1 = Money.pen(150);
const money2 = Money.pen(150);
const money3 = Money.usd(150);
console.log(money1.equals(money2));
console.log(money1.equals(money3));

const money = new Money(15, Currencies.USD);
const newMoney = money.addAmount(15);
console.log(`${newMoney.currency} ${newMoney.amount}`);