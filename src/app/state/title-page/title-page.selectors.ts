import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { TitlePageState } from './title-page.model';

const selectTitlePageState = (state: AppState): TitlePageState =>
  state.titlePage;

export const selectTitle = createSelector(
  selectTitlePageState,
  (state: TitlePageState) => state.title
);
