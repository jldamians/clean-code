import Message from "./Message";
import NotifierInterface from "./NotifierInterface";

export default class SomeClass{
  private notifier: NotifierInterface;

  constructor(notifier: NotifierInterface) {
    this.notifier = notifier;
  }

  public doStuff(to: string, body: string): void {
    const message = new Message(to, body);

    this.notifier.notify(message);
  }
}

