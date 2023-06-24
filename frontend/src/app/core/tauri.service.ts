import { Injectable } from '@angular/core';
import { invoke } from '@tauri-apps/api';
import { Observable, from } from 'rxjs';

export enum TAURI_COMMANDS {
	MY_CUSTOM_COMMAND = 'my_custom_command',
}

@Injectable({ providedIn: 'root' })
export class TauriService {
	isRunningInTauri = !!(window as any).__TAURI__;

	constructor() {}

	myCustomCommand(message: string) {
		if (!this.isRunningInTauri) {
			throw new Error('NOT RUNNING IN TAURI!!!');
		}

		return from(invoke<string>(TAURI_COMMANDS.MY_CUSTOM_COMMAND, { message }));
	}
}
