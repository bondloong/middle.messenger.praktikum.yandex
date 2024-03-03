import Block from '../../../../../utils/Block';

interface ILastWritterProps {
	lastWritterLogin: string;
}

export class LastWritter extends Block<ILastWritterProps> {
	constructor(props: ILastWritterProps) {
		const updatedProps = {
			...props,
			lastWritterLogin: props.lastWritterLogin === '@You' ? 'Вы' : props.lastWritterLogin,
		};

		super(updatedProps);
	}

	protected render(): string {
		return `
	      <span class="chat__last-writter-login">${this.props.lastWritterLogin}: </span>
	    `;
	}
}
