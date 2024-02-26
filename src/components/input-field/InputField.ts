import Block from '../../utils/Block.ts';
import { InputError } from './input-error/InputError.ts';
import { Input } from './input/Input.ts'
import './input.less'


interface IInputFieldProps {
	placeholder?: string;
	id: string;
	name: string;
	type: string;
	disabled?: boolean;
	value?: string;
	className: string;
	title?: string;
	validate?: (value: string) => string | undefined;
	onBlur: () => void;
}

type Ref = {
	input: Input;
	errorLine: InputError;
};

export class InputField extends Block<IInputFieldProps, Ref> {
	constructor(props: IInputFieldProps) {
		super({
			...props,
			onBlur: () => this.validate(),
		});
	}

	public value(): string | null {
		if (!this.validate()) {
			return null;
		}
		return (this.refs.input.element as HTMLInputElement).value;
	}

	protected render(): string {
		const { placeholder, id, name, type, value, disabled, className, title } = this.props;


		return `
			  <div class="input-block" >
				<label class="input-block__label" >
					{{{ InputError error=error ref="errorLine" }}}
					{{{	Input
						ref="input"
                 		onBlur=onBlur
						className = "${className}"
						placeholder = "${placeholder ? placeholder : ''}"
						value = "${value ? value : ''}"
						title = "${title ? title : ''}"
						id = "${id}"
						type = "${type}"
						name = "${name}"
						autocomplete = "false"
						 ${disabled ? 'disabled' : ''}
					}}}
				</label>
				</div>
		`
	}

	private validate(): boolean | string {
		const value = (this.refs.input.element as HTMLInputElement).value;
		const error = this.props.validate?.(value);
		if (error) {
			this.refs.errorLine.setProps({ error });
			return false;
		}
		this.refs.errorLine.setProps({ error: undefined });
		return true;
	}
}





