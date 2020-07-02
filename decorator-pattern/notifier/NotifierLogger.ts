import LoggerInterface from "./LoggerInterface";
import NotifierInterface from "./NotifierInterface";
import Message from "./Message";

export default class NotifierLogger implements NotifierInterface {
  private logger: LoggerInterface;
  private notifier: NotifierInterface;

  constructor(notifier: NotifierInterface, logger: LoggerInterface) {
    this.logger = logger;
    this.notifier = notifier;
  }

  public notify(message: Message): void {
    this.logger.info(message);
    this.notifier.notify(message);
  }
}