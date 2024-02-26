import * as Pages from '../pages';

export const PAGES = {
	login: Pages.PageLogin,
	register: Pages.PageRegister,
	chat: Pages.PageChat,
	notFound: Pages.PageError,
	profile: Pages.PageProfile,
};

export function navigate(page?: keyof typeof PAGES): void {
	const app = document.getElementById('app');

	if (app) {
		app.innerHTML = '';
	}

	const specifiedPage = page || getPageFromQuery();

	if (specifiedPage && PAGES[specifiedPage]) {
		setQueryParameter('page', specifiedPage);

		const Component = PAGES[specifiedPage];
		const component = new Component();
		app?.append(component.getContent()!);
	} else {
		navigate("notFound")
	}
}

function getPageFromQuery(): keyof typeof PAGES | undefined {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('page') as keyof typeof PAGES | undefined;
}

function setQueryParameter(key: string, value: string): void {
	const url = new URL(window.location.href);
	url.searchParams.set(key, value);
	window.history.replaceState({}, '', url.href);
}