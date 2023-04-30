import { ApiProperty } from '@nestjs/swagger';
import { TemplateModel } from './template.model';

export class TemplatesResponseDto {
  @ApiProperty({ type: [TemplateModel] })
  templates: TemplateModel[];
}
