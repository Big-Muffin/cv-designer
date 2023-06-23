export interface Language {
	name: string;
	code: string;
}

export const DEFAULT_LANGUAGE_INDEX = 0;

export const LANGUAGES: Language[] = [
	{ name: 'English', code: 'en-US' },
	{ name: 'Polski', code: 'pl-PL' },
];

export interface SetLanguageProps {
  language: Language;
}

export interface SettingsState {
  language: Language;
}

export const initialState: SettingsState = {
  language: LANGUAGES[DEFAULT_LANGUAGE_INDEX],
};
