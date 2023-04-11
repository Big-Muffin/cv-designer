import { NgModule } from '@angular/core';
import { TitlePageComponent } from './title-page/title-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TitlePageComponent],
  imports: [CommonModule],
  exports: [TitlePageComponent],
})
export class FeaturesModule {}
