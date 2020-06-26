import WebsiteDecorator from "./WebsiteDecorator";

export default class WebsiteCetificate extends WebsiteDecorator {
  public getPrice(): number {
    return 150.00 + this.website.getPrice();
  }

  public getDescription(): string {
    return `${this.website.getDescription()} + ssl`;
  }
}