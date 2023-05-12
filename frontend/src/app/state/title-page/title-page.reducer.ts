import { createReducer, on } from '@ngrx/store';
import { initialState } from './title-page.model';

import * as actions from './title-page.actions';

export const titlePageReducer = createReducer(
  initialState,
  on(actions.setTitle, (state, { title }) => ({ ...state, title }))
);
