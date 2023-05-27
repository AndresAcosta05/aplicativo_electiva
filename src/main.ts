import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import{ValidationPipe} from '@nestjs/common';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist :true, // ignorar los datos que no esten en el DTO
      forbidNonWhitelisted :true,//LANZAR ERROR SI EXISTEN DATOS PROHIBIDOS
    }),
  );
  const config =new DocumentBuilder()
    .setTitle('Proyecto Electiva Profundizacion I')
    .setDescription(' VIII Semetre')
    .addBearerAuth()
    .setVersion('1.0')
    .build();
  const document =SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentacion',app,document);
  await app.listen(3000);
}
bootstrap();
