import WebsiteDecorator from "./WebsiteDecorator";

export default class WebsiteDomain extends WebsiteDecorator {
  public getPrice(): number {
    return 500.00 + this.website.getPrice();
  }

  public getDescription(): string {
    return `${this.website.getDescription()} + dominio`;
  }
}