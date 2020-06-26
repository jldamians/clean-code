import WebsiteDecorator from "./WebsiteDecorator";

export default class WebsiteSEO extends WebsiteDecorator {
  public getPrice(): number {
    return 1000.00 + this.website.getPrice();
  }

  public getDescription(): string {
    return `${this.website.getDescription()} + seo`;
  }
}