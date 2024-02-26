import Block from '../../utils/Block';
import { IChat, IChatInfo, chats, chat } from '../../utils/constants';
import './chat.less'


interface IChatProps {
	chats: IChat[];
	chat: IChatInfo;
}


export class PageChat extends Block<IChatProps> {
	constructor() {
		super({
			chats,
			chat,
		});
	}

	protected render(): string {
		return `
			<main class="chat">
				{{{ChatContent chats=chats }}}
				{{{Messages chat=chat}}}
			</main>
		`
	}
}