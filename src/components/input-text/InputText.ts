import Block from '../../utils/Block';
import './input-text.less';

interface IInputTextProps {
	icon?: string;
	name: string;
	id: string;
	disabled?: boolean;
	placeholder?: string;
	value?: string | '';
	onBlur?: (event: FocusEvent) => void;
	events?: {
		blur?: (event: FocusEvent) => void;
	};
}

export class InputText extends Block<IInputTextProps> {
	constructor(props: IInputTextProps) {
		super({
			...props,
			events: {
				blur: props.onBlur,
			},
		});
	}

	protected render(): string {
		const { name, id, disabled, value, placeholder, icon } = this.props;
		return `
			<div class="input-text">
			  ${icon ? `<img src=${icon} alt="Icon" class="input-text__icon" />` : ''}
			  <input 
			  	id = "${id}"
				name = "${name}"
			  	type="text" 
				class="input-text__field" 
				placeholder = "${placeholder ? placeholder : ''}"
				value = "${value ? value : ''}"
				autocomplete = "false"
				 ${disabled ? 'disabled' : ''}
			/>
			</div>
			`;
	}
}
