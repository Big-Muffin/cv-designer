import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '..';

import * as actions from './title-page.actions';
import * as selectors from './title-page.selectors';
import { SetTitleProps } from './title-page.model';

@Injectable()
export class TitlePageFacade {
  title$ = this.store.pipe(select(selectors.selectTitle));

  constructor(private store: Store<AppState>) {}

  setTitle(props: SetTitleProps): void {
    this.store.dispatch(actions.setTitle(props));
  }
}
