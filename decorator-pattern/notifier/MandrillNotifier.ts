import Message from "./Message";
import MandrillClient from "./MandrillClient";
import NotifierInterface from "./NotifierInterface";

export default class MandrillNotifier implements NotifierInterface {
  private client: MandrillClient;

  constructor(client: MandrillClient) {
    this.client = client;
  }

  public notify(message: Message): void {
    this.client.send(message.to, message.body);
  }
}