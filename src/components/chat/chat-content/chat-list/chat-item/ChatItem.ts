import Block from '../../../../../utils/Block';
import { navigate } from '../../../../../utils/navigate.ts';
import { IChat } from '../../../../../utils/constants.ts';
import { nanoid } from 'nanoid';

interface IChatItemProps {
	chat: IChat;
	id: string;
	onProfile: (e: any) => void;
	showChatSettings: (e: Event) => void;
}

export class ChatItem extends Block<IChatItemProps> {
	constructor(props: IChatItemProps) {
		super({
			...props,
			id: nanoid(6),
			onProfile: (e) => {
				e.preventDefault();
				navigate('profile');
			},
			showChatSettings(event: Event) {
				event.preventDefault();
				const fileSendSettings = document.getElementById(this.id);
				if (fileSendSettings) {
					fileSendSettings.classList.toggle('hidden');
				}
			},
		});
	}

	protected render(): string {
		const { chatId, target, avatar, chatName, lastWritterLogin, lastMessage, upd, unReading } = this.props.chat;
		const { id } = this.props;
		return `
			<div class="chat__item-wrapper {{#if ${target}}}chat__item-wrapper_target{{/if}} ">
				  {{#if  ${target}}}
			        <div  id="${id}" class="chat__item-settings chat__item-settings_left">
			          <div>Открыть профиль</div>
			          <div>Удалить из друзей</div>
			          <div>Добавить в избранное</div>
			          <div>Удалить чат</div>
			        </div>
			      {{/if}}
			      <div class="chat__item">
			        <div class="chat__info">
			          {{{ Avatar src="${avatar}" id="${chatId}" alt="${chatName}" unReading=${unReading} onClick=onProfile }}}
			          <div class="chat__last-message">
			            <div class="chat__name">${chatName}</div>
			        	{{{ LastWritter lastWritterLogin="${lastWritterLogin}" }}}
			            <span class="chat__last-writter-text">${lastMessage}</span>
			          </div>
			        </div>
			        <div class="chat__status">
			          	<div class="chat__upd">${upd}</div>
					  	{{#if ${unReading}}}
							<div class="chat__unreading unreading">${unReading}</div>
						{{/if}}
			        </div>
			      </div>
		      </div>
		`;
	}
}
