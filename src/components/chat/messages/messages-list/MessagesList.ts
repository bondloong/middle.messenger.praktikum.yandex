import Block from '../../../../utils/Block';
import { IChatInfo, IMessageType } from '../../../../utils/constants';

interface IMessagesListProps {
	chat: IChatInfo;
	messages: IMessageType[];
}

export class MessagesList extends Block<IMessagesListProps> {
	constructor(props: IMessagesListProps) {
		super({
			...props,
			messages: props.chat.messages,
		});
	}

	protected render(): string {
		return `
			<div class="messages__list">
				<div class="messages__date">
	            19 июня
	          </div>
			  {{#each messages}}
		      	{{{MessagesItem message=this}}}    
		      {{/each}}
	        </div>
		`;
	}
}
