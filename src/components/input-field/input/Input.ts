import Block from '../../../utils/Block';

interface IInputProps {
	type: string;
	name: string;
	id: string;
	disabled?: boolean;
	placeholder?: string;
	value?: string | '';
	className: string;
	onBlur?: (event: FocusEvent) => void;
	events?: {
		blur?: (event: FocusEvent) => void;
	};
}

export class Input extends Block<IInputProps> {
	constructor(props: IInputProps) {
		super({
			...props,
			events: {
				blur: props.onBlur,
			},
		});
	}

	protected render(): string {
		const { type, name, id, disabled, value, placeholder, className } = this.props;
		return `
      		<input
			class="input-block__input input__${className}"
			placeholder = "${placeholder ? placeholder : ''}"
			value = "${value ? value : ''}"
			id = "${id}"
			type = "${type}"
			name = "${name}"
			autocomplete = "false"
			 ${disabled ? 'disabled' : ''}
/>`;
	}
}





