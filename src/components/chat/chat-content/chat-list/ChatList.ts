import Block from '../../../../utils/Block'
import { IChat } from '../../../../utils/constants.ts';

interface IChatListProps {
	chats: IChat[]
}

export class ChatList extends Block<IChatListProps> {
	constructor(props: IChatListProps) {
		super({
			...props,
		})
	}

	protected render(): string {
		return `
			<div class="chat__list">
		      {{#each chats}}
		      	{{{ChatItem chat=this }}}
		      {{/each}}
			  {{#> Popup hide=""}}
				 <h2>
				    Вы уверены, что хотите удалить</br>чат с пользователем?
				  </h2>
				  {{{ Button className="primary " label="Удалить чат" }}}
				  {{{ Button className="grey " label="Отменить" id="popup-close" }}}
				{{/Popup}}
		    </div>
		`
	}
}
