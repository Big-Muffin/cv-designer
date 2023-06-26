import { Component, OnInit } from '@angular/core';
import { OnDestroyMixin } from '@w11k/ngx-componentdestroyed';
import { DEFAULT_LANGUAGE_INDEX, LANGUAGES } from './state/settings';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent extends OnDestroyMixin implements OnInit {
	LANGUAGES = LANGUAGES;
	DEFAULT_LANGUAGE_INDEX = DEFAULT_LANGUAGE_INDEX;

	constructor(private translateService: TranslateService) {
		super();
	}

	ngOnInit(): void {
		const language = this.LANGUAGES[this.DEFAULT_LANGUAGE_INDEX];
		this.translateService.setDefaultLang(language.code);
	}
}
