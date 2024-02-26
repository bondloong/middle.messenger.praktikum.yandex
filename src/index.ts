import Handlebars from 'handlebars';

import * as Components from './components';
import * as Pages from './pages';
import * as Files from './assets'

import { IChat, IMessages, chats, messages, profile } from './utils/constants'


const pages = {
	//@ts-ignore
	'login': [Pages.PageLogin, { ...Files }],
	'register': [Pages.PageRegister, { ...Files }],
	'chat': [Pages.PageChat, { chats, messages, openedChatId: "444", profile, ...Files }],
	'chat-user': [Pages.PageChatUser, { chats, messages, openedChatId: "444", profile, ...Files }],
	'chat-user-delete': [Pages.PageChatUser, { chats, messages, profile, deleteUser: "444", ...Files }],
	'500': [Pages.ErrorPage, { errorNumber: 500, errorDescription: "Ошибка сервера", errorText: "На сервере произошла непредвиденная ошибка. Пожалуйста, подождите, мы уже занимаемся решением.", ...Files }],
	'404': [Pages.ErrorPage, { errorNumber: 404, errorDescription: "Страница не найдена", errorText: "Мы ещё не успели сделать эту страницу.", ...Files }],
	'profile': [Pages.PageProfile, { ...profile, ...Files }],
	'profile-change': [Pages.PageProfileChange, { ...profile, ...Files }],
};

Handlebars.registerHelper('formatLastWritterLogin', function (lastWritterLogin) {
	return lastWritterLogin === '@You' ? 'Вы:' : "";
});

Handlebars.registerHelper('ifMessageFromYou', function (Login) {
	return Login === '@You' ? 'messages_from-you' : "messages_to-you";
});

Handlebars.registerHelper('getMessagesByChatId', function (messages: IMessages[], chatId: string) {
	const filteredMessages = messages.filter((message: IMessages) => message.chatId === chatId);
	return filteredMessages
});

Handlebars.registerHelper('sortByUnreading', function (chats: IChat[]) {
	const sortedChats = chats.slice();

	sortedChats.sort((a, b) => b.unReading - a.unReading);

	return sortedChats.map(chat => ({
		...chat,
		isTarget: chat.unReading > 0,
	}));
});

Handlebars.registerHelper('nl2br', function (text) {
	const escapedText = Handlebars.Utils.escapeExpression(text);
	const withBreaks = escapedText.replace(/\n/g, '<br>');
	return new Handlebars.SafeString(withBreaks);
});



Object.entries(Components).forEach(([name, component]) => {
	Handlebars.registerPartial(name, component);
});

Object.entries(Files).forEach(([name, file]) => {
	Handlebars.registerPartial(name, file);
});


function navigate(page: string) {
	//@ts-ignore
	const [source, context] = pages[page];
	const container = document.getElementById('app')!;
	container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', e => {
	console.log(e.target)
	//@ts-ignore
	const page = e.target.getAttribute('page');
	const popup = document.getElementById('popup-close');
	if (page) {
		navigate(page);
		e.preventDefault();
		e.stopImmediatePropagation();
	}
	//@ts-ignore
	if (e.target.getAttribute("id") === 'popup-close') {
		//@ts-ignore
		popup.style.display = 'none';
		e.preventDefault();
		e.stopImmediatePropagation();
	}

});
