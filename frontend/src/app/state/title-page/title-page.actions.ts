import { createAction, props } from '@ngrx/store';
import { SetTitleProps } from './title-page.model';

export const setTitle = createAction(
  '[Title Page] Set title',
  props<SetTitleProps>()
);
