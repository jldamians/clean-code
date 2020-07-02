import Message from "./Message";
import LoggerInterface from "./LoggerInterface";

export default class ConsoleLogger implements LoggerInterface {
  constructor() {}

  public info(message: Message): void {
    console.log(message);
  }
}