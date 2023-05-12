import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class BaseQuery {
  @ApiPropertyOptional({ type: Number, default: 10 })
  @IsOptional()
  @IsString()
  take?: string;

  @ApiPropertyOptional({ type: Number, default: 0 })
  @IsOptional()
  @IsString()
  skip?: string;
}
