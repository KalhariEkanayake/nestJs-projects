import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(UsersModule);
  // await app.listen(process.env.port ?? 4001);
  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Frontend URL
    credentials: true,
  });

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'servers/email-templates'));
  app.setViewEngine('ejs');

  await app.listen(process.env.port ?? 4001);
}
bootstrap();
