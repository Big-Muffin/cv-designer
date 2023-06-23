import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { GetImageAssetPipe } from './pipes/get-asset.pipe';

const pipes = [GetImageAssetPipe];

const modules = [MaterialModule, TranslateModule];

@NgModule({
	declarations: [...pipes],
	imports: [],
	exports: [...modules, ...pipes],
})
export class SharedModule {}
