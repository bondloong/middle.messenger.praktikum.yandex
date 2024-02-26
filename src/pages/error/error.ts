import Block from '../../utils/Block';
import { navigate } from '../../utils/navigate';
import './error.less'

interface PageErrorProps {
	errorNumber: number;
	errorDescription: string;
	errorText: string;
	onChat: (e: Event) => void;
}


export class PageError extends Block<PageErrorProps> {
	constructor() {
		super({
			errorNumber: 404,
			errorDescription: 'Страница не найдена',
			errorText: 'Мы ещё не успели сделать эту страницу',
			onChat: (e) => {
				e.preventDefault();
				navigate('chat');
			},
		});
	}

	protected render(): string {
		const { errorNumber, errorDescription, errorText } = this.props;
		return `
			<main class="error-page">
				<div class="error-page__content">
					<div class="error-page__status">
						<div class="error-page__number">${errorNumber}</div>
						<div class="error-page__description">${errorDescription}</div>
						<div class="error-page__text">${errorText}</div>
					</div>
					{{{ Button label="Вернуться к чатам" className="primary" page="chat" onClick=onChat }}}
				</div>
			</main>
		`
	}
}