import Message from "./Message";

export default interface LoggerInterface {
  info(message: Message): void;
}