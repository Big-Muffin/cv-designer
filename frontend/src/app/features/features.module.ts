import { NgModule } from '@angular/core';
import { TitlePageComponent } from './title-page/title-page.component';
import { CommonModule } from '@angular/common';

const components = [TitlePageComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class FeaturesModule {}
