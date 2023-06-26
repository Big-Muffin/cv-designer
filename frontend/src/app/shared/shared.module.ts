import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { GetImageAssetPipe } from './pipes/get-asset.pipe';
import { ButtonComponent } from './components/button/button.component';

const pipes = [GetImageAssetPipe];

const components = [ButtonComponent];

const modules = [MaterialModule, TranslateModule];

@NgModule({
	declarations: [...pipes, ...components],
	imports: [],
	exports: [...modules, ...pipes, ...components],
})
export class SharedModule {}
