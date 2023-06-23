import { Component } from '@angular/core';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
	onClickLogin(): void {
		alert('Clicked LOGIN button');
	}

	onClickGuest(): void {
		alert('Clicked GUEST button');
	}
}
