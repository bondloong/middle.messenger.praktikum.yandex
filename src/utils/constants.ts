import { ProfileIcon, CameraImage } from '../assets/images/index'

export interface IMessageType {
	login: string;
	text?: string;
	file?: string;
	date: string;
	isReading?: boolean;
}

export interface IMessages {
	chatId: string;
	chatName: string;
	avatar: string;
	chatMessages: IMessageType[];
}

export const messages: IMessages[] = [
	{
		chatId: "444",
		chatName: "Вадим",
		avatar: ProfileIcon,
		chatMessages: [
			{
				login: "@Vadim",
				text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

				Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
				date: "12:00"
			},
			{
				login: "@Vadim",
				file: CameraImage,
				date: "12:10"
			},
			{
				login: "@You",
				text: "Круто!",
				date: "13:20",
				isReading: true
			}
		]
	}
]


export interface IChat {
	chatId: string;
	avatar: string;
	chatName: string;
	lastMessage: string;
	unReading: number;
	upd: string;
	lastWritterLogin: string;
	target?: boolean;
}

export const chats: IChat[] = [
	{
		chatId: "111",
		avatar: ProfileIcon,
		chatName: "Андрей",
		lastWritterLogin: "@Andrev",
		lastMessage: "Изображение",
		unReading: 2,
		upd: "пн"
	},
	{
		chatId: "222",
		avatar: ProfileIcon,
		chatName: "Киноклуб",
		lastWritterLogin: "@You",
		lastMessage: "стикер",
		unReading: 0,
		upd: "вт"
	},
	{
		chatId: "333",
		avatar: ProfileIcon,
		chatName: "Илья",
		lastWritterLogin: "@Ilya",
		lastMessage: "Друзья, у меня для вас особенный выпуск новостей!...",
		unReading: 2,
		upd: "10:49"
	},
	{
		chatId: "444",
		avatar: ProfileIcon,
		chatName: "Вадим",
		lastWritterLogin: "@You",
		lastMessage: "Круто!",
		unReading: 0,
		upd: "10:49",
		target: true
	},
	{
		chatId: "555",
		avatar: ProfileIcon,
		chatName: "тет-а-теты",
		lastWritterLogin: "@tat",
		lastMessage: "И Human Interface Guidelines и Material Design рекомендуют...",
		unReading: 0,
		upd: "10:49"
	},
	{
		chatId: "666",
		avatar: ProfileIcon,
		chatName: "1, 2, 3",
		lastWritterLogin: "@123",
		lastMessage: "Миллионы россиян ежедневно проводят десятки часов свое...",
		unReading: 0,
		upd: "10:49"
	},
	{
		chatId: "777",
		avatar: ProfileIcon,
		chatName: "1, 2, 3",
		lastWritterLogin: "@123",
		lastMessage: "Миллионы россиян ежедневно проводят десятки часов свое...",
		unReading: 0,
		upd: "10:49"
	},
	{
		chatId: "888",
		avatar: ProfileIcon,
		chatName: "Design Destroyer",
		lastWritterLogin: "@DD",
		lastMessage: "В 2008 году художник Jon Rafman  начал собирать...",
		unReading: 0,
		upd: "10:49"
	},
	{
		chatId: "999",
		avatar: ProfileIcon,
		chatName: "Day.",
		lastWritterLogin: "@DD",
		lastMessage: "Так увлёкся работой по курсу, что совсем забыл его анонсир...",
		unReading: 0,
		upd: "0:49"
	},
	{
		chatId: "000",
		avatar: ProfileIcon,
		chatName: "Day.",
		lastWritterLogin: "@DD",
		lastMessage: "Так увлёкся работой по курсу, что совсем забыл его анонсир...",
		unReading: 0,
		upd: "10:49"
	},
	{
		chatId: "1111",
		avatar: ProfileIcon,
		chatName: "Day.",
		lastWritterLogin: "@DD",
		lastMessage: "Так увлёкся работой по курсу, что совсем забыл его анонсир...",
		unReading: 0,
		upd: "10:49"
	},
	{
		chatId: "2222",
		avatar: ProfileIcon,
		chatName: "Day.",
		lastWritterLogin: "@DD",
		lastMessage: "Так увлёкся работой по курсу, что совсем забыл его анонсир...",
		unReading: 0,
		upd: "10:49"
	}
]

export interface Iprofile {
	first_name: string;
	second_name: string;
	login: string;
	email: string;
	phone: string;
	avatar: string;
	oldPassword: string;
	newPassword: string;
}
export const profile: Iprofile = {
	first_name: "Alexey",
	second_name: "Gorbachev",
	avatar: ProfileIcon,
	login: "@You",
	email: "gorbachev22@yandex.ru",
	phone: "+7 (999) 999-99-99",
	oldPassword: "123456",
	newPassword: "123456"
}
