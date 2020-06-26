import WebsiteDecorator from "./WebsiteDecorator";

export default class WebsiteDesign extends WebsiteDecorator {
  public getPrice(): number {
    return 3500.00 + this.website.getPrice();
  }

  public getDescription(): string {
    return `${this.website.getDescription()} + diseño`;
  }
}