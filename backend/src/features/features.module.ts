import { Module } from '@nestjs/common';
import { TemplateModule } from './template/template.module';

const modules = [TemplateModule];

@Module({
  imports: [...modules],
  exports: [...modules],
})
export class FeaturesModule {}
