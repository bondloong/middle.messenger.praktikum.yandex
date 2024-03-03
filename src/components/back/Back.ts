import Block from '../../utils/Block';
import { Button } from '../button';
import { ArrowIcon } from '../../assets';
import { navigate } from '../../utils/navigate';
import './back.less';

type Ref = {
	button: Button;
};

interface iBackProps {
	page: string;
	onBack?: (event: KeyboardEvent | MouseEvent) => void;
}

export class Back extends Block<iBackProps, Ref> {
	constructor(props: iBackProps) {
		super({
			...props,
			onBack: (e) => {
				e.preventDefault();
				navigate('chat');
			},
		});
	}
	protected render(): string {
		const { page } = this.props;
		return `
			<div class="back" page={{page}}>
			  	{{{ Button 
					className="button button__primary radius-50 back__arrow primary" 
					page="${page}"
					icon="${ArrowIcon}" 
					onClick=onBack
				}}}
			</div>
		`;
	}
}
