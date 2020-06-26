import WebsiteInterface from "./WebsiteInterface";

export default class ConcreteWebsite implements WebsiteInterface {
  public getPrice(): number {
    return 2500.00;
  }

  public getDescription(): string {
    return 'Sitio web estándar';
  }
}