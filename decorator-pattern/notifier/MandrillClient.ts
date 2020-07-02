export default class MandrillClient {
  private key: string;
  private secret: string;

  constructor(key: string, secret: string) {
    this.key = key;
    this.secret = secret;
  }

  public send(to: string, body: string): void {
    console.log('Message sent successfully with mandrill');
  }
}