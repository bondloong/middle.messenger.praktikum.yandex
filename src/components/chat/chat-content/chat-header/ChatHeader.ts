import Block from '../../../../utils/Block'
import { ProfileIcon, SearchIcon, CreateChatIcon } from '../../../../assets/index.ts';
import { InputText } from '../../../input-text/InputText.ts';
import { navigate } from '../../../../utils/navigate.ts';
import { IChat } from '../../../../utils/constants.ts';

type Ref = {
	search: InputText;
}

interface IChatHeaderProps {
	chats: IChat[]
	profileImg: string;
	searchImg: string;
	createChatImg: string;
	search: string;
	onProfile: (e: any) => void
}

export class ChatHeader extends Block<IChatHeaderProps, Ref> {

	constructor(props: IChatHeaderProps) {
		const sortedChats = props.chats.slice().sort((a, b) => b.unReading - a.unReading);

		super({
			...props,
			profileImg: ProfileIcon,
			search: "",
			searchImg: SearchIcon,
			createChatImg: CreateChatIcon,
			chats: sortedChats,
			onProfile: (e) => {
				e.preventDefault();
				navigate('profile');
			},
		})

	}

	protected render(): string {
		const { profileImg, search, searchImg, createChatImg, } = this.props
		return `
			<div class="chat__header">
        		<div class="chat__search">
			        <div>
			          {{{ Avatar src="${profileImg}" alt="" onClick=onProfile}}}
			        </div>
			        <div style="width: 100%">
				        {{{InputText 
							id="search"
				            name="search"
							placeholder="Поиск"
				            type="search"
				            ref="search"
							className="primary"
							icon="${searchImg}"
							value="${search}"
						}}}
			        </div>
			        <div>
						{{{ Button className="primary radius-50" icon="${createChatImg}" }}}
			        </div>
			      </div>
			      <div class="chat__favourites">
				    {{#each chats}}
					   {{{ Avatar src=this.avatar id=this.id alt=this.chatName unReading=this.unReading }}}
					{{/each}}
				</div>
		      </div>
      		</div>
		`
	}
}