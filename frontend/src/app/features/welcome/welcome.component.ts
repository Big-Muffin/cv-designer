import { Component } from '@angular/core';
import { TauriService } from '@app/core/tauri.service';
import { BUTTON_TYPE } from '@shared/components/button/button.component';
import {
	OnDestroyMixin,
	untilComponentDestroyed,
} from '@w11k/ngx-componentdestroyed';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent extends OnDestroyMixin {
	BUTTON_TYPE = BUTTON_TYPE;

	constructor(
		private tauriService: TauriService
	) {
		super();
	}

	onClickLogin(): void {
		console.log('Clicked LOGIN button');

		// @TODO: a demo on how to run tauri commands
		if (this.tauriService.isRunningInTauri) {
			this.tauriService
				.myCustomCommand('LOGIN button')
				.pipe(untilComponentDestroyed(this))
				.subscribe(alert);
		}
	}

	onClickGuest(): void {
		console.log('Clicked GUEST button');
	}
}
