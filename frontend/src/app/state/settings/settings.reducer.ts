import { createReducer, on } from '@ngrx/store';
import { initialState } from './settings.model';

import * as actions from './settings.actions';

export const settingsReducer = createReducer(
	initialState,
	on(actions.setNewSettings, (state, { type, ...newSettings }) => ({
		...state,
		...newSettings,
	})),

	on(actions.updateNewestChange, (state, { __newestChange }) => ({
		...state,
		__newestChange,
	}))
);
