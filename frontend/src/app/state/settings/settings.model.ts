export interface Language {
	name: string;
	code: string;
}

export const DEFAULT_LANGUAGE_INDEX = 0;

export const LANGUAGES: Language[] = [
	{ name: 'English', code: 'en-US' },
	{ name: 'Polski', code: 'pl-PL' },
];

export interface UpdateNewestChangeProps {
	__newestChange: Date;
}

export type SetSettingsProps = Partial<Omit<SettingsState, '__newestChange'>>

export interface SettingsState {
	language: Language;
	__newestChange: Date;
}

export const initialState: SettingsState = {
	language: LANGUAGES[DEFAULT_LANGUAGE_INDEX],
	__newestChange: new Date(),
};
