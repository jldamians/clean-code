enum Currencies {
  USD = 'USD',
  PEN = 'PEN',
  EUR = 'EUR',
}

class Money {
  private amount: number;
  private currency: Currencies;

  public static usd(amount: number) {
    return new this(amount, Currencies.USD);
  }

  public static pen(amount: number) {
    return new this(amount, Currencies.PEN);
  }

  public static eur(amount: number) {
    return new this(amount, Currencies.EUR);
  }

  constructor(amount: number, currency: Currencies) {
    this.amount = amount;
    this.currency = currency;
  }

  public equals(money: Money) {
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