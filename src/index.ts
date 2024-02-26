import Handlebars from 'handlebars';
import * as Components from './components';
import * as Layouts from './layouts';
import { navigate } from './utils/navigate.ts';
import { registerComponent } from './utils/registerComponents.ts';

Object.entries(Layouts).forEach(([name, layout]) => {
	Handlebars.registerPartial(name, layout);
});

registerComponent('Input', Components.Input);
registerComponent('InputText', Components.InputText);
registerComponent('InputError', Components.InputError);
registerComponent('InputField', Components.InputField);
registerComponent('Button', Components.Button);
registerComponent('Back', Components.Back);
registerComponent('Link', Components.Link);
registerComponent('Avatar', Components.Avatar);

registerComponent('ChatContent', Components.ChatContent);
registerComponent('ChatHeader', Components.ChatHeader);
registerComponent('ChatList', Components.ChatList);
registerComponent('ChatItem', Components.ChatItem);
registerComponent('LastWritter', Components.LastWritter);

registerComponent('Messages', Components.Messages);
registerComponent('MessagesHeader', Components.MessagesHeader);
registerComponent('MessagesFooter', Components.MessagesFooter);
registerComponent('MessagesList', Components.MessagesList);
registerComponent('MessagesItem', Components.MessagesItem);


document.addEventListener('DOMContentLoaded', () => navigate('login'));
