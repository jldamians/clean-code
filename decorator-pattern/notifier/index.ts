import SendgridClient from "./SendgridClient";
import SendgridNotifier from "./SendgridNotifier";
import MandrillClient from "./MandrillClient";
import MandrillNotifier from "./MandrillNotifier";
import ConsoleLogger from "./ConsoleLogger";
import SomeClass from "./SomeClass";
import NotifierLogger from "./NotifierLogger";

const sendgridKey = 'sendgrid-api-key';
const sendgridSecret = 'sendgrid-api-secret';
const sendgridClient = new SendgridClient(sendgridKey, sendgridSecret);
const sendgridNotifier = new SendgridNotifier(sendgridClient);
const someClass01 = new SomeClass(sendgridNotifier);
someClass01.doStuff('jldamians@gmail.com', 'Hello jldamians!');

const mandrillKey = 'mandrill-api-key';
const mandrillSecret = 'mandrill-api-secret';
const mandrillClient = new MandrillClient(mandrillKey, mandrillSecret);
const mandrillNotifier = new MandrillNotifier(mandrillClient);
const mandrillNotifierWithLogger = new NotifierLogger(mandrillNotifier, new ConsoleLogger());
const someClass02 = new SomeClass(mandrillNotifierWithLogger);
someClass02.doStuff('jldamians@gmail.com', 'Hello jldamians!');