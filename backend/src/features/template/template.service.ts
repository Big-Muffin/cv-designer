import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import {
  TemplateBodyRequestDto,
  TemplateIdRequestDto,
  TemplateQuery,
  TemplateRequestDto,
  TemplatesResponseDto,
} from '@shared/models/template';
import { ErrorText } from '@shared/utils/enums';
import { parseBaseQuery } from '@shared/utils/funcs/parse-base-query.func';

@Injectable()
export class TemplateService {
  constructor(private prismaService: PrismaService) {}

  async get(query: TemplateIdRequestDto): Promise<TemplatesResponseDto> {
    const { id } = query;

    const foundTemplate = await this.prismaService.template.findFirst({
      where: { id },
    });

    if (!foundTemplate) {
      throw new HttpException(
        `${ErrorText.TEMPLATE_GET} ${id}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return { templates: [foundTemplate] };
  }

  async getMany(query: TemplateQuery): Promise<TemplatesResponseDto> {
    return {
      templates: await this.prismaService.template.findMany({
        ...parseBaseQuery(query),
      }),
    };
  }

  async create(request: TemplateBodyRequestDto): Promise<TemplatesResponseDto> {
    const newTemplate = await this.prismaService.template.create({
      data: { ...request },
    });

    if (!newTemplate) {
      throw new HttpException(
        ErrorText.TEMPLATE_CREATE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return { templates: [newTemplate] };
  }

  async update(request: TemplateRequestDto): Promise<TemplatesResponseDto> {
    const { id, ...data } = request;

    const updatedTemplate = await this.prismaService.template.update({
      where: { id },
      data,
    });

    if (!updatedTemplate) {
      throw new HttpException(
        `${ErrorText.TEMPLATE_UPDATE} ${id}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return { templates: [updatedTemplate] };
  }

  async delete(request: TemplateIdRequestDto): Promise<TemplatesResponseDto> {
    const { id } = request;

    const deletedTemplate = await this.prismaService.template.delete({
      where: { id },
    });

    if (!deletedTemplate) {
      throw new HttpException(
        `${ErrorText.TEMPLATE_DELETE} ${id}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return { templates: [deletedTemplate] };
  }
}
