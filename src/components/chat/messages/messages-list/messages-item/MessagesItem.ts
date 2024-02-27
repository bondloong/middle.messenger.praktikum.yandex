import { ReadingStatusIcon } from '../../../../../assets';
import Block from '../../../../../utils/Block';
import { IMessageType } from '../../../../../utils/constants';

interface IMessagesItemProps {
	message: IMessageType;
}

export class MessagesItem extends Block<IMessagesItemProps> {
	constructor(props: IMessagesItemProps) {
		super({
			...props,
		});
	}

	protected render(): string {
		const { login, text, file, date, isReading } = this.props.message;

		return `
			  <div class="messages__item ${login === '@You' ? 'messages_from-you' : 'messages_to-you'}">
			  	<div class="messages__text">
		            ${text ? `<div class="messages__text">${text.replace(/\n/g, '<br>')}</div>` : ``}
					${file ? `<div class="messages__file"><img src=${file} alt="image from ${login}"></div>` : ``}
					
					<div class="messages__time chat__upd ${file ? 'messages_have-file' : ''}">
                      	<span style="float: right; padding-top: 12px;" class="${isReading ? 'text-primary' : ''}">
					  		${isReading ? `<img src="${ReadingStatusIcon}" alt="">` : ''}${date}
						</span>
                    </div>
	            </div>
			  </div>
		`;
	}
}
