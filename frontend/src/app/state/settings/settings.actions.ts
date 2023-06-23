import { createAction, props } from '@ngrx/store';
import { SetLanguageProps } from './settings.model';

export const setLanguage = createAction(
  '[Settings] Set language',
  props<SetLanguageProps>()
);
