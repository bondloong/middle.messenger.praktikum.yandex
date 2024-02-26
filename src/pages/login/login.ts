import { InputField } from '../../components/index.ts';
import Block from '../../utils/Block.ts';
import { navigate } from '../../utils/navigate.ts';
import * as validators from '../../utils/validators.ts';
import './login.less'

type Ref = {
	login: InputField;
	password: InputField;
	error: InputField;
};

interface ILoginPageProps {
	validate: {
		login: (value: string) => string | boolean;
		password: (value: string) => string | boolean;
	};
	onLogin: (event: KeyboardEvent | MouseEvent) => void;
	onRegistration: (event: KeyboardEvent | MouseEvent) => void;
	onErrorPage: (event: KeyboardEvent | MouseEvent) => void;
}

export class PageLogin extends Block<ILoginPageProps, Ref> {
	constructor() {
		super({
			validate: {
				login: validators.login,
				password: validators.password,
			},
			onLogin: (event: Event) => {
				event.preventDefault();

				const login = this.refs.login.value();
				const password = this.refs.password.value();

				if (!login || !password) {
					return;
				}

				console.log({
					login,
					password,
				});
				navigate('chat');
			},
			onRegistration: (event: Event) => {
				event.preventDefault();
				navigate('register');
			},
			onErrorPage: (event: Event) => {
				event.preventDefault();
				/* @ts-ignore */
				// Для проверки страницы
				navigate('asd');
			},
		});
	}

	protected render(): string {
		return `
			{{#> Form h1="Вход"}}
				{{{ InputField
		            id="login"
		            name="login"
		            type="text"
		            mode="float"
		            ref="login"
		            validate=validate.login
					placeholder="Логин" 
					className="primary"
				}}}
				{{{ InputField 
		            id="password"
		            name="password"
		            type="password"
		            mode="float"
		            ref="password"
		            validate=validate.password
					placeholder="Пароль"
					className="primary"
				}}}
				{{{ Button label="Вход" className="primary" page="login" onClick=onLogin }}}
				{{{ Link label="Регистрация" className="link" page="register" onClick=onRegistration}}}
				{{{ Link label="О нет!" className="link" page="error" onClick=onErrorPage}}}
			{{/Form}}
		`
	}
}

