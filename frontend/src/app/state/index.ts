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

// @TODO: add localStorageSync / tauri meta reducer for settings and more
// if needed (https://tauri.app/v1/api/js/path#appdatadir)
// storageKeySerializer should probably be a hash
// proposition of storageKeySerializer: 35399512a51dc75e44acb1b70ebdc089900b5b7ad7589fe8fe6d89fc2ded8bd0
