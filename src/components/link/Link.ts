import Block from '../../utils/Block';
import './link.less';

interface ILinkProps {
	className: string;
	id: string;
	style?: string;
	title?: string;
	type: string;
	page?: string;
	label?: string;
	onClick: () => void;
	events?: { [key: string]: () => void };
}

export class Link extends Block<ILinkProps> {
	constructor(props: ILinkProps) {
		super(props);
	}

	protected init(): void {
		this.props.events = {
			click: this.props.onClick,
		};
	}

	protected render(): string {
		const { type, id, className, style, title, label, page } = this.props;
		return `
		<a 	class="link link__${className}"
			href="#"
			${page ? `page="${page}"` : ``}
			${id ? `id="${id}"` : ``}
			${style ? `style="${style}"` : ``}
			${title ? `title="${title}"` : ``}
			${type ? `icon="${type}"` : ``}
		>	  
			${label ? `${label}` : ''}
		</a>
		`;
	}
}
