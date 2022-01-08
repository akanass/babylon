import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { join } from 'path';
import * as Config from 'config';
import { ServerConfig } from './app.types';

async function bootstrap(config: ServerConfig) {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  await app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
  });
  await app.listen(config.port, config.host);
  Logger.log(
    `Application served at ${config.protocol}://${config.host}:${config.port}`,
    'bootstrap',
  );
}

bootstrap(Config.get<ServerConfig>('server'));
