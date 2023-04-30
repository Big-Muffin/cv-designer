import { Module } from '@nestjs/common';
import { FeaturesModule } from './features/features.module';
import { PrismaModule } from '@prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

const modules = [
  PrismaModule,
  FeaturesModule,
  // @TODO: more investigation needed: https://docs.nestjs.com/techniques/configuration
  ConfigModule.forRoot({
    envFilePath: ['.env.dev'],
  }),
];

@Module({
  imports: [...modules],
})
export class AppModule {}
