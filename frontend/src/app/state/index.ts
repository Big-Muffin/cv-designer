import { Action, ActionReducer } from '@ngrx/store';
import {
	SettingsEffects,
	SettingsFacade,
	SettingsState,
	settingsReducer,
} from './settings';

export interface AppState {
	settings: SettingsState;
}

interface AppReducers {
	settings: ActionReducer<SettingsState, Action>;
}

export const reducers: AppReducers = {
	settings: settingsReducer,
};

export const facades = [SettingsFacade];

export const effects = [SettingsEffects];
