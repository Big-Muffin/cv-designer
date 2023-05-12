import { ApiProperty } from '@nestjs/swagger';
import { TemplateEntity } from '@shared/generated-dtos';

export class TemplateModel implements TemplateEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}
