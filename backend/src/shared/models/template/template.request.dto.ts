import { ApiProperty } from '@nestjs/swagger';
import {
  ConnectTemplateDto,
  CreateTemplateDto,
  UpdateTemplateDto,
} from '@shared/generated-dtos';
import { IsString } from 'class-validator';

export class TemplateIdRequestDto implements ConnectTemplateDto {
  @ApiProperty()
  @IsString()
  id: string;
}

export class TemplateBodyRequestDto implements CreateTemplateDto {
  @ApiProperty()
  @IsString()
  name: string;
}

export class TemplateRequestDto implements UpdateTemplateDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  name: string;
}
