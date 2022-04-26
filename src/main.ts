
import {HttpAdapterHost, NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger, ValidationPipe} from "@nestjs/common";
import 'dotenv/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {PrismaClientExceptionFilter} from "./prisma-client-exception.filter";

const port = process.env.PORT;


async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  //contraints
  app.useGlobalPipes(new ValidationPipe());

  //erreur
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  //doc api
  const config = new DocumentBuilder()
      .setTitle('Auth example')
      .setDescription('The auth API description')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  Logger.log(`Server started running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();

