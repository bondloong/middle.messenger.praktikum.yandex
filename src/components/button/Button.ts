import Block from '../../utils/Block';
import './button.less';

interface IButtonProps {
	className: string;
	id: string;
	style?: string;
	title?: string;
	icon?: string;
	type: string;
	page?: string;
	label?: string;
	onClick: () => void;
	events?: { [key: string]: () => void };
}

export class Button extends Block<IButtonProps> {
	constructor(props: IButtonProps) {
		super(props);
	}

	protected init(): void {
		this.props.events = {
			click: this.props.onClick,
		};
	}

	protected render(): string {
		const { type, id, className, style, title, icon, label, page } = this.props;
		return `
		<button
		  class="button button__${className}"
		  ${page ? `page="${page}"` : ``}
		  ${id ? `id="${id}"` : ``}
		  ${style ? `style="${style}"` : ``}
		  ${title ? `title="${title}"` : ``}
		  ${type ? `icon="${type}"` : ``}
		>
		  
		    ${icon ? `<img src="${icon}" alt="Button Icon" ${page && `page="${page}"`} />` : ``}
		  
		  ${label ? `${label}` : ''}
		</button>
		`;
	}
}
