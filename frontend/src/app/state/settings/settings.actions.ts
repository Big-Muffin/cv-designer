import { createAction, props } from '@ngrx/store';
import { SetSettingsProps, UpdateNewestChangeProps } from './settings.model';

export const updateNewestChange = createAction(
	'[Settings] Update newest change date',
	props<UpdateNewestChangeProps>()
);

export const setNewSettings = createAction(
	'[Settings] Set new settings',
	props<SetSettingsProps>()
);
