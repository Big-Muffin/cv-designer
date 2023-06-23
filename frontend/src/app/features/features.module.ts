import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';

const components = [WelcomeComponent];

@NgModule({
	declarations: [...components],
	imports: [CommonModule, SharedModule],
	exports: [...components],
})
export class FeaturesModule {}
