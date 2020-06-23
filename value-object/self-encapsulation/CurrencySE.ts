class InvalidArgumentException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidArgumentException';
  }
}

class CurrencySE {
  private _isoCode!: string;
  
  constructor(isoCode: string) {
    this.setIsoCode(isoCode);
  }

  public get isoCode(): string {
    return this._isoCode;
  }

  // self encapsulation
  private setIsoCode(isoCode: string) {
    const isoCodeRegexp = /^[A-Z]{3}$/;
    const isValidIsoCode = isoCodeRegexp.test(isoCode);

    if (!isValidIsoCode) {
      throw new InvalidArgumentException(`El código ${isoCode} ingresado es incorrecto`);
    }

    this._isoCode = isoCode;
  }

  public equals(currency: CurrencySE): boolean {
    return this.isoCode === currency.isoCode;
  }

  public toString(): string {
    return this.isoCode;
  }
}

console.log(`${new CurrencySE('PEN')}`);

try {
  console.log(`${new CurrencySE('PENs')}`);  
} catch ({ name, message }) {
  console.log(`[${name}] ${message}`);
}