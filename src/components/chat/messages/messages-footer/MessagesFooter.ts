import { ArrowIcon, ClipIcon, FileIcon, LocationIcon, PhotoVideoIcon } from '../../../../assets';
import Block from '../../../../utils/Block';
import { InputText } from '../../../input-text';

type Ref = {
	sendMessage: InputText;
}

interface IMessagesFooterProps {
	sendMessage: string;
	showFileSendSettings: (e: Event) => void
}

export class MessagesFooter extends Block<IMessagesFooterProps, Ref> {
	constructor(props: IMessagesFooterProps) {
		super({
			...props,
			sendMessage: "",
			showFileSendSettings(event: Event) {
				event.preventDefault();
				const fileSendSettings = document.getElementById('messages__file-send-settings');
				const fileSendSettingsButton = document.getElementById('file-send-settings');
				if (fileSendSettings && fileSendSettingsButton) {
					fileSendSettings.classList.toggle('hidden');
					fileSendSettingsButton?.classList.toggle('button__active');
				}
			}
		});
	}



	protected render(): string {
		const { sendMessage } = this.props;
		return `
            <div class="messages__footer">
                <div>
                    <div id="messages__file-send-settings" class="messages__file-send-settings hidden">
			            <div>
			              <img alt="icon" src="${PhotoVideoIcon}" class="icon" />
			              <div>Фото или Видео</div>
			            </div>
			            <div>
			              <img alt="icon" src="${FileIcon}" class="icon" />
			              <div>Файл</div>
			            </div>
			            <div>
			              <img alt="icon" src="${LocationIcon}" class="icon" />
			              <div>Локация</div>
			            </div>
			        </div>
                    {{{ Button className=" radius-50" icon="${ClipIcon}" id="file-send-settings" onClick=showFileSendSettings }}}
                </div>
				<div style="width: 100%">
					{{{InputText
							id="sendMessage"
				            name="sendMessage"
							placeholder="Сообщение"
				            type="text"
				            ref="sendMessage"
							className="grey"
							value="${sendMessage}"
						}}}
				</div>
				<div>
					{{{ Button className="primary radius-50" style="transform: rotate(180deg);" icon="${ArrowIcon}"}}}
				</div>
            </div>
        `;
	}
}
