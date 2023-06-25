import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '..';

import * as actions from './settings.actions';
import * as selectors from './settings.selectors';
import { SetSettingsProps } from './settings.model';

@Injectable()
export class SettingsFacade {
	settings$ = this.store.pipe(select(selectors.selectSettings));

	constructor(private store: Store<AppState>) {}

	setNewSettings(payload: SetSettingsProps): void {
		this.store.dispatch(actions.setNewSettings(payload));
	}
}
