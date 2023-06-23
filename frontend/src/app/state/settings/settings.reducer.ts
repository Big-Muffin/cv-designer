import { createReducer, on } from '@ngrx/store';
import { initialState } from './settings.model';

import * as actions from './settings.actions';

export const settingsReducer = createReducer(
	initialState,
	on(actions.setLanguage, (state, { language }) => ({ ...state, language })),
);
