import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Frontend URL
    credentials: true, // Allow cookies and authorization headers
  });

  await app.listen(process.env.PORT ?? 4001);
  // await app.listen(process.env.PORT ?? 4001);
}
bootstrap();
