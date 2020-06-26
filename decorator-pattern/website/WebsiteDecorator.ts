import WebsiteInterface from "./WebsiteInterface";

export default abstract class WebsiteDecorator implements WebsiteInterface {
  protected website: WebsiteInterface;

  constructor(webiste: WebsiteInterface) {
    this.website = webiste;
  }

  public abstract getPrice(): number;

  public abstract getDescription(): string;
}