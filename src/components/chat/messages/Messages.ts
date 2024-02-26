import Block from '../../../utils/Block'
import { IChatInfo } from '../../../utils/constants'
import './messages.less'

interface IMessagesProps {
	chat: IChatInfo
}


export class Messages extends Block<IMessagesProps> {
	constructor(props: IMessagesProps) {
		super({
			...props
		})
	}

	protected render(): string {
		return `
			<div class="messages">
				{{{MessagesHeader chat=chat}}}
				{{{MessagesList chat=chat}}}
				{{{MessagesFooter }}}
		    </div>
		`
	}
}
