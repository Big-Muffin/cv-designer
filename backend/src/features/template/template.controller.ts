import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Path } from '@shared/utils/enums';
import { TemplateService } from './template.service';
import { ApiOkResponse } from '@nestjs/swagger';
import {
  TemplatesResponseDto,
  TemplateQuery,
  TemplateBodyRequestDto,
  TemplateRequestDto,
  TemplateIdRequestDto,
} from '@shared/models/template';

@Controller(Path.TEMPLATE_ROOT)
export class TemplateController {
  constructor(private templateService: TemplateService) {}

  @ApiOkResponse({ type: TemplatesResponseDto })
  @Get()
  async get(
    @Body() request: TemplateIdRequestDto,
  ): Promise<TemplatesResponseDto> {
    return await this.templateService.get(request);
  }

  @ApiOkResponse({ type: TemplatesResponseDto })
  @Get(Path.TEMPLATE_MANY)
  async getMany(@Query() query: TemplateQuery): Promise<TemplatesResponseDto> {
    return await this.templateService.getMany(query);
  }

  // @TODO: do we need createMany, updateMany, deleteMany???
  @ApiOkResponse({ type: TemplatesResponseDto })
  @Post()
  async create(
    @Body() request: TemplateBodyRequestDto,
  ): Promise<TemplatesResponseDto> {
    return await this.templateService.create(request);
  }

  @ApiOkResponse({ type: TemplatesResponseDto })
  @Patch()
  async update(
    @Body() request: TemplateRequestDto,
  ): Promise<TemplatesResponseDto> {
    return await this.templateService.update(request);
  }

  @ApiOkResponse({ type: TemplatesResponseDto })
  @Delete()
  async delete(
    @Body() request: TemplateIdRequestDto,
  ): Promise<TemplatesResponseDto> {
    return await this.templateService.delete(request);
  }
}
