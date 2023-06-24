import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TauriService } from '@app/core/tauri.service';

export enum BUTTON_TYPE {
	MAIN = 'cv-button-main',
	SECONDARY = 'cv-button-secondary',
	WARNING = 'cv-button-warning',
}

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
	@Input() type = BUTTON_TYPE.MAIN;
	@Input() text = '';

	@Output() buttonClick = new EventEmitter<MouseEvent>();

	constructor() {}

	onClick(event: MouseEvent): void {
		this.buttonClick.emit(event);
	}
}
