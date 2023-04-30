import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { Env } from './shared/utils/enums';
import { ValidationPipe } from '@nestjs/common';
import { isNil } from 'lodash';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger
  const config = new DocumentBuilder()
    .setTitle('CV-Designer')
    .setDescription('The CV-Designer API description')
    .setVersion('0.1')
    .build();
  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };
  const document = SwaggerModule.createDocument(app, config, options);
  const customOptions: SwaggerCustomOptions = {
    explorer: true,
    useGlobalPrefix: true,
  };
  SwaggerModule.setup('api', app, document, customOptions);

  // validators
  app.useGlobalPipes(new ValidationPipe());

  // listen
  const nestPort = process.env.NEST_PORT;
  await app.listen(!isNil(nestPort) ? nestPort : 3000);

  // logs for dev
  const nodeEnv = process.env.NODE_ENV;
  if (!isNil(nodeEnv) && nodeEnv === Env.DEV) {
    console.log(`App started on http://localhost:${nestPort}`);
    console.log(`Swagger available on http://localhost:${nestPort}/api`);
  }
}

bootstrap();
