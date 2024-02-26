import Block from '../../../utils/Block';
import { IChat } from '../../../utils/constants';
import './chat-content.less';

interface IChatContentProps {
	chats: IChat[];
}

export class ChatContent extends Block<IChatContentProps> {
	constructor(props: IChatContentProps) {
		super({
			...props,
		});
	}

	protected render(): string {
		return `
			<div class="chat__content">
				{{{ChatHeader chats=chats }}}
				{{{ChatList chats=chats }}}
		    </div>
		`;
	}
}
