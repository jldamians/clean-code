class ChargeSE {
  private _units: number;
  private _rate: number;

  constructor(units: number, rate: number) {
    this._units = units;
    this._rate = rate;
  }

  public get units(): number {
    return this._units;
  }
  // self encapsulation
  private get rate(): number {
    return this._rate;
  }
  public get amount(): number {
    return this.units * this.rate;
  }
}

const charge = new ChargeSE(5, 3.5);
console.log(`Unidades: ${charge.units}, Monto: ${charge.amount}`);