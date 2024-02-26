import Block from '../../utils/Block';
import './avatar.less';

interface IErrorLineProps {
	src?: string;
	alt?: string;
	id?: string;
	className?: string;
	unReading?: number;
	onClick: () => void;
	events?: { [key: string]: () => void };
}

export class Avatar extends Block<IErrorLineProps> {
	constructor(props: IErrorLineProps) {
		super(props);
	}

	protected init(): void {
		this.props.events = {
			click: this.props.onClick,
		};
	}

	protected render(): string {
		const { src, alt, className, id, unReading } = this.props;
		return `
			<img 
				src="${src ? src : ''}" 
				alt="${alt ? alt : ''}"
				id="${id ? id : ''}"
			
				class="${className ? className : ''} ${unReading ? `unreading` : ''} avatar" /> 
    `;
	}
}
