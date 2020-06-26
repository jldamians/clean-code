import WebsiteDecorator from "./WebsiteDecorator";

export default class WebsiteHosting extends WebsiteDecorator {
  public getPrice(): number {
    return 650.00 + this.website.getPrice();
  }

  public getDescription(): string {
    return `${this.website.getDescription()} + alojamiento`;
  }
}