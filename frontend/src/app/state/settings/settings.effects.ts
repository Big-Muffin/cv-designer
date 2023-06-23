import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '..';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';

import * as actions from './settings.actions';
import { tap } from 'rxjs';

@Injectable()
export class SettingsEffects {
	state$ = this.store.select((state) => state.settings);

	constructor(
		private store: Store<AppState>,
		private actions$: Actions,
		private translateService: TranslateService
	) {}

	setLanguageEffect$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(actions.setLanguage),
				tap(({ language }) => {
					this.translateService.use(language.code);
				})
			),
		{ dispatch: false }
	);
}
