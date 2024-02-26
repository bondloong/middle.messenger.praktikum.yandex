import { PlusIcon } from '../../../../assets';
import Block from '../../../../utils/Block'
import { IChatInfo } from '../../../../utils/constants'


interface IMessagesHeaderProps {
	chat: IChatInfo;
	showFileSendSettings: (e: Event) => void;
	changeFriendStatus: (e: Event) => void;
	changeBookmarkStatus: (e: Event) => void;
}

export class MessagesHeader extends Block<IMessagesHeaderProps> {
	constructor(props: IMessagesHeaderProps) {
		super({
			...props,
			showFileSendSettings(event: Event) {
				event.preventDefault();
				const fileSendSettings = document.querySelector('.chat__item-settings_top');
				if (fileSendSettings) {
					fileSendSettings.classList.toggle('hidden');
				}
			},
			changeFriendStatus(event: Event) {
				event.preventDefault();
				const fileSendSettings = document.getElementById('frendship');
				if (fileSendSettings) {
					fileSendSettings.classList.toggle('button__grey_active');
				}
			},
			changeBookmarkStatus(event: Event) {
				event.preventDefault();
				const fileSendSettings = document.getElementById('bookmark');
				if (fileSendSettings) {
					fileSendSettings.classList.toggle('button__grey_active');
				}
			},
		})
	}

	protected render(): string {
		const { chat: { avatar, chatName } } = this.props

		return `
			<div class="messages__header">
		          <div class="messages__sender">
				  <div class="chat__item-settings chat__item-settings_top hidden">
			          <div>Список пользователей</div>
			          <div>Изменение аватара чата</div>
			          <div>Удаление чата</div>
			       </div>
		        	{{{ Avatar src="${avatar}" alt="" onClick=showFileSendSettings }}}
					<div class="messages__name">${chatName}</div>
		          </div>
		          <div class="messages__actions">	
		            {{{ Button className="grey" icon="${PlusIcon}" title="Добавить в закладки" id="bookmark" onClick=changeBookmarkStatus }}}
					{{{ Button className="primary "icon="${PlusIcon}" label="Добавить в друзья" id="frendship" onClick=changeFriendStatus }}}
		          </div>
	        </div>
		`
	}
}
