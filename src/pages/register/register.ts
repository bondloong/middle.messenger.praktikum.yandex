import { InputField } from '../../components/index.ts';
import Block from '../../utils/Block.ts';
import { navigate } from '../../utils/navigate.ts';
import * as validators from '../../utils/validators.ts';

type Ref = {
	email: InputField;
	login: InputField;
	first_name: InputField;
	second_name: InputField;
	phone: InputField;
	password: InputField;
	password2: InputField;
};

interface IRegistrationPageProps {
	validate: {
		email: (value: string) => string | boolean;
		login: (value: string) => string | boolean;
		password: (value: string) => string | boolean;
		name: (value: string) => string | boolean;
		phone: (value: string) => string | boolean;
	};
	onLogin: (event: KeyboardEvent | MouseEvent) => void;
	onRegistration: (event: KeyboardEvent | MouseEvent) => void;
}

export class PageRegister extends Block<IRegistrationPageProps, Ref> {
	constructor() {
		super({
			validate: {
				login: validators.login,
				password: validators.password,
				email: validators.email,
				name: validators.name,
				phone: validators.phone,
			},
			onLogin: (event) => {
				event.preventDefault();
				navigate('login');
			},
			onRegistration: (event) => {
				event.preventDefault();
				const email = this.refs.email.value();
				const login = this.refs.login.value();
				const first_name = this.refs.first_name.value();
				const second_name = this.refs.second_name.value();
				const phone = this.refs.phone.value();
				const password = this.refs.password.value();
				const password2 = this.refs.password2.value();

				if (password !== password2) {
					this.refs.password.setProps({ value: password, invalid: true });
					this.refs.password2.setProps({ value: password2, invalid: true });
					// @ts-expect-error: set error manually
					this.refs.password2.refs.errorLine.setProps({ error: 'Пароли не совпадают' });
					return;
				} else {
					this.refs.password.setProps({ value: password, invalid: false });
					this.refs.password2.setProps({ value: password2, invalid: false });
				}
				if (!email || !login || !first_name || !second_name || !phone) {
					return;
				}
				console.log({
					email,
					login,
					first_name,
					second_name,
					phone,
					password,
				});
				navigate('chat');
			},
		});
	}

	protected render(): string {
		return `
		{{#> Form h1="Регистрация"}}
				{{{ InputField
		            id="email"
		            name="email"
					placeholder="Почта"
		            type="email"
		            mode="float"
		            ref="email"
		            validate=validate.email
					className="primary"
				}}}
				{{{ InputField
		            id="login"
		            name="login"
					placeholder="Логин"
		            type="text"
		            mode="float"
		            ref="login"
		            validate=validate.login
					className="primary"
				}}}
				{{{ InputField
		            id="first_name"
		            name="first_name"
					placeholder="Имя"
		            type="text"
		            mode="float"
		            ref="first_name"
		            validate=validate.first_name
					className="primary"
				}}}
				{{{ InputField
		            id="second_name"
		            name="second_name"
					placeholder="Фамилия"
		            type="text"
		            mode="float"
		            ref="second_name"
		            validate=validate.second_name
					className="primary"
				}}}
				{{{ InputField
		            id="phone"
		            name="phone"
					placeholder="Телефон"
		            type="tel"
		            mode="float"
		            ref="phone"
		            validate=validate.phone
					className="primary"
					title="Введите номер телефона в формате +7 999 999 99 99"
				}}}
				{{{ InputField
		            id="password"
		            name="password"
					placeholder="Пароль"
		            type="password"
		            mode="float"
		            ref="password"
		            validate=validate.password
					className="primary"
				}}}
				{{{ InputField
		            id="password2"
		            name="password2"
					placeholder="Повторите пароль"
		            type="password2"
		            mode="float"
		            ref="password2"
		            validate=validate.password2
					className="primary"
				}}}
				{{{ Button label="Зарегистрироваться" className="primary" page="login" onClick=onRegistration}}}
				{{{ Link label="Войти " className="link" page="login" onClick=onLogin }}}
		{{/Form}}
		`;
	}
}
