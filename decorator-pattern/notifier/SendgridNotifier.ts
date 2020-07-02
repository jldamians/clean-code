import Message from "./Message";
import SendgridClient from "./SendgridClient";
import NotifierInterface from "./NotifierInterface";

export default class SendgridNotifier implements NotifierInterface {
  private client: SendgridClient;

  constructor(client: SendgridClient) {
    this.client = client;
  }

  public notify(message: Message): void {
    this.client.send(message.to, message.body);
  }
}