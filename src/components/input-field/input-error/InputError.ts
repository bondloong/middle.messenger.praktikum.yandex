import Block from '../../../utils/Block';

interface IErrorLineProps {
	error?: string;
}

export class InputError extends Block<IErrorLineProps> {
	constructor(props: IErrorLineProps) {
		super(props);
	}

	protected render(): string {
		const { error } = this.props;
		return `
    		<div class="input-block__label-error">${error ? error : ''}</div>
    `;
	}
}
