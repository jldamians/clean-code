export default class Message {
  private _to: string;
  private _body: string;

  constructor(to: string, body: string) {
    this._to = to;
    this._body = body;
  }

  get to(): string {
    return this._to;
  }
  get body(): string {
    return this._body;
  }
}