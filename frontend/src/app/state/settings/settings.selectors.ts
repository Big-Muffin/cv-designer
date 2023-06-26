import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { SettingsState } from './settings.model';

const selectSettingsState = (state: AppState): SettingsState => state.settings;

export const selectSettings = createSelector(
	selectSettingsState,
	(state: SettingsState) => ({ ...state })
);
