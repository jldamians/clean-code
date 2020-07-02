import Message from './Message';

export default interface NotifierInterface {
  notify(message: Message): void;
}