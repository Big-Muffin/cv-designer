import { Action, ActionReducer } from '@ngrx/store';
import { TitlePageFacade, TitlePageState, titlePageReducer } from './title-page';

export interface AppState {
  titlePage: TitlePageState;
}

interface AppReducers {
  titlePage: ActionReducer<TitlePageState, Action>;
}

export const reducers: AppReducers = {
  titlePage: titlePageReducer,
};

export const facades = [TitlePageFacade];
