import { ProfileIcon } from '../../assets/index.ts';
import { InputField } from '../../components/index.ts';
import Block from '../../utils/Block.ts';
import { navigate } from '../../utils/navigate.ts';
import * as validators from '../../utils/validators.ts';
import './profile.less';

type Ref = {
	// avatar: Avatar;
	email: InputField;
	login: InputField;
	first_name: InputField;
	second_name: InputField;
	display_name: InputField;
	phone: InputField;
	newPassword: InputField;
	oldPassword: InputField;
};

export interface IProfilePageProps {
	img?: string;
	display_name: string;
	email: string;
	login: string;
	first_name: string;
	second_name: string;
	phone: string;
	newPassword: string;
	oldPassword: string;
	hide: string;
	onEditProfile?: (event: KeyboardEvent | MouseEvent) => void;
	onHidePopup?: (event: KeyboardEvent | MouseEvent) => void;
	onLogOut?: (event: KeyboardEvent | MouseEvent) => void;
	validate: {
		email: (value: string) => string | boolean;
		login: (value: string) => string | boolean;
		newPassword: (value: string) => string | boolean;
		oldPassword: (value: string) => string | boolean;
		first_name: (value: string) => string | boolean;
		second_name: (value: string) => string | boolean;
		display_name: (value: string) => string | boolean;
		phone: (value: string) => string | boolean;
	};
}

export class PageProfile extends Block<IProfilePageProps, Ref> {
	constructor() {
		super({
			img: ProfileIcon,
			email: 'pochta@yandex.ru',
			login: 'ivanivanov',
			first_name: 'Иван',
			second_name: 'Иванов',
			display_name: 'Иван',
			phone: '+79099673030',
			newPassword: '',
			oldPassword: '',
			hide: '',
			onEditProfile: (event) => {
				event.preventDefault();
				const email = this.refs.email.value();
				const login = this.refs.login.value();
				const first_name = this.refs.first_name.value();
				const second_name = this.refs.second_name.value();
				const phone = this.refs.phone.value();
				const newPassword = this.refs.newPassword.value();
				const oldPassword = this.refs.oldPassword.value();

				if (newPassword === oldPassword) {
					this.refs.newPassword.setProps({ value: newPassword, invalid: true });
					this.refs.oldPassword.setProps({ value: oldPassword, invalid: true });
					// @ts-expect-error: set error manually
					this.refs.oldPassword.refs.errorLine.setProps({ error: 'Пароли не должны совпадать' });
					return;
				} else {
					this.refs.newPassword.setProps({ value: newPassword, invalid: false });
					this.refs.oldPassword.setProps({ value: oldPassword, invalid: false });
				}

				console.log({
					email,
					login,
					first_name,
					second_name,
					phone,
					newPassword,
					oldPassword,
				});
			},
			onHidePopup: (e) => {
				e.preventDefault();
				this.props.hide = 'true';
			},
			onLogOut: (e) => {
				e.preventDefault();
				navigate('login');
			},
			validate: {
				login: validators.login,
				newPassword: validators.password,
				oldPassword: validators.password,
				email: validators.email,
				first_name: validators.name,
				second_name: validators.name,
				display_name: validators.name,
				phone: validators.phone,
			},
		});
	}

	protected render(): string {
		const { img, display_name, email, login, first_name, second_name, phone, newPassword, oldPassword, hide } =
			this.props;
		return `
		<div>
		{{{ Back page="login"}}}
		{{#> Form h1="Профиль"}}
		{{{ Avatar src="${img}" alt=${first_name} className="profile__avatar" onClick=onHidePopup }}}
				{{{ InputField
		            id="email"
		            name="email"
					placeholder="Почта"
		            type="email"
		            ref="email"
		            validate=validate.email
					className="primary"
					value="${email}"
				}}}
				{{{ InputField
		            id="login"
		            name="login"
					placeholder="Логин"
		            type="text"
		            ref="login"
		            validate=validate.login
					className="primary"
					value="${login}"
				}}}
				{{{ InputField
		            id="first_name"
		            name="first_name"
					placeholder="Имя"
		            type="text"
		            ref="first_name"
		            validate=validate.first_name
					className="primary"
					value="${first_name}"
				}}}
				{{{ InputField
		            id="second_name"
		            name="second_name"
					placeholder="Фамилия"
		            type="text"
		            ref="second_name"
		            validate=validate.second_name
					className="primary"
					value="${second_name}"
				}}}
				{{{ InputField
		            id="display_name"
		            name="display_name"
					placeholder="Отображаемое имя"
		            type="text"
		            ref="display_name"
		            validate=validate.display_name
					className="primary"
					value="${display_name}"
				}}}
				{{{ InputField
		            id="phone"
		            name="phone"
					placeholder="Телефон"
		            type="tel"
		            ref="phone"
		            validate=validate.phone
					className="primary"
					title="Введите номер телефона в формате +7(999)999-99-99"
					pattern="+7(999)999-99-99"
					value="${phone}"
				}}}
				{{{ InputField
		            id="newPassword"
		            name="newPassword"
					placeholder="Новый пароль"
		            type="password"
		            ref="newPassword"
		            validate=validate.newPassword
					className="primary"
					value="${newPassword}"
				}}}
				{{{ InputField
		            id="oldPassword"
		            name="oldPassword"
					placeholder="Старый пароль"
		            type="password"
		            mode="float"
		            ref="oldPassword"
		            validate=validate.oldPassword
					className="primary"
					value="${oldPassword}"
				}}}
				{{{ Button label="Изменить данные" className="primary" page="login" onClick=onEditProfile }}}
				{{{ Button label="Выйти из аккаунта" className="grey" page="login" onClick=onLogOut }}}
		{{/Form}}
				{{#> Popup hide="${hide}"}}
					<h2 class="text-error">
						Ошибка при загрузке файла.</br>Попробуйте ещё раз.
					</h2>
				{{/Popup}}
		</div>
		`;
	}
}
