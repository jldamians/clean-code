// ref: https://medium.com/@mnavarrocarter/enriqueciendo-tus-modelos-7b3c184832c5

class Mechanic {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

class Car {
  private tank!: Tank;

  constructor(tank: Tank) {
    this.tank = tank;
  }

  public fillTank(order: FillingOrder): void {
    order.fill(this.tank);
  }

  public changeTank(order: ChangeTankOrder, mechanic: Mechanic): void {
    this.tank = order.fetchTank(mechanic);
  }

  public getTackCapacity(): number {
    return this.tank.getMaxCapacity();
  }
}

class Tank {
  private maxCapacity: number;
  private currentCapacity: number;

  constructor(maxCapacity: number, currentCapacity: number) {
    this.maxCapacity = maxCapacity;
    this.currentCapacity = currentCapacity;
  }

  /**
   * Llena el tanque a su capacidad máxima y
   * retorna los litros ingresados para llenarlo
   */
  public fillInFull(): number {
    const filled = this.maxCapacity - this.currentCapacity;
    this.currentCapacity = this.maxCapacity;
    return filled;
  }

  // Llena el tanque sólo con los litros necesarios y
  // retornar el excedente de libros no despachados
  public fill(liters: number): number {
    // si la suma (capacidad actual + litros) es mayor
    // a la capacidad del tanque, hace lo siguiente:
    if ((this.currentCapacity + liters) >= this.maxCapacity) {
      return liters - this.fillInFull();
    }

    // si la suma (capacidad actual + litros) es menor
    // a la capacidad del tanque, asignar lo litros a
    // la capacidad actual del tanque
    this.currentCapacity += liters;

    // no hay excedente puesto que no se supera la capacidad del tanque
    return 0;
  }

  public getMaxCapacity(): number {
    return this.maxCapacity;
  }

  public isFull(): boolean {
    return this.currentCapacity === this.maxCapacity;
  }
}

class FillingOrder {
  private isFull: boolean;
  private liters: number;
  private litersLeft: number;

  private constructor(isFull: boolean, liters: number = 0) {
    if (!isFull && liters === 0) {
      throw new Error('Debe indicar la cantidad de litros de la orden');
    }

    this.isFull = isFull;
    this.liters = liters;
    // litros sin abastecer
    this.litersLeft = 0;
  }

  public static full() {
      return new this(true);
  }

  public static liter(liters: number) {
    return new this(false, liters);
  }

  public getLitersLeft(): number {
    return this.litersLeft;
  }

  public fill(tank: Tank): void {
    if (this.isFull) {
      tank.fillInFull();
    } else {
      this.litersLeft = tank.fill(this.liters);
    }
  }
}

class ChangeTankOrder {
  // tanque nuevo
  private tank: Tank;
  private executeBy!: Mechanic;
  constructor(tank: Tank) {
    this.tank = tank;
  }

  public fetchTank(mechanic: Mechanic): Tank {
    this.executeBy = mechanic;
    return this.tank;
  }
}

const myMustangShelbyTank = new Tank(60, 10);
const myMustangShelby = new Car(myMustangShelbyTank);
const myMustangShelbyOrder = FillingOrder.full();

myMustangShelby.fillTank(myMustangShelbyOrder);
console.log(`Shelby Orden 1, excedente: ${myMustangShelbyOrder.getLitersLeft()} lts`);
// Shelby Orden 1, excedente: 0

const myDodgeChargerTank = new Tank(60, 0);
const myDodgeCharger = new Car(myDodgeChargerTank);

const myDodgeChargerOrder01 = FillingOrder.liter(25);
myDodgeCharger.fillTank(myDodgeChargerOrder01);
console.log(`Dodge Orden 1, excedente: ${myDodgeChargerOrder01.getLitersLeft()} lts`);
// Dodge Orden 1, excedente: 0

const myDodgeChargerOrder02 = FillingOrder.liter(25);
myDodgeCharger.fillTank(myDodgeChargerOrder02);
console.log(`Dodge Orden 2, excedente: ${myDodgeChargerOrder02.getLitersLeft()} lts`);
// Dodge Orden 2, excedente: 0

const myDodgeChargerOrder03 = FillingOrder.liter(30);
myDodgeCharger.fillTank(myDodgeChargerOrder03);
console.log(`Dodge Orden 3, excedente: ${myDodgeChargerOrder03.getLitersLeft()} lts`);
// Dodge Orden 3, excedente: 20

const myFerrariOldTank = new Tank(50, 0);
const myFerrariNewTank = new Tank(60, 0);
const myFerrariChangeTankOrder = new ChangeTankOrder(myFerrariNewTank);
const myFerrari = new Car(myFerrariOldTank);
console.log(`Tanque ${myFerrari.getTackCapacity()} lts`);
myFerrari.changeTank(myFerrariChangeTankOrder, new Mechanic('JL'));
console.log(`Tanque ${myFerrari.getTackCapacity()} lts`);
