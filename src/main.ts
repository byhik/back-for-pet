import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: ['http://localhost:3000', 'https://pet-tan.vercel.app', 'https://pet-hiks-projects-8b470726.vercel.app'],
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    credentials: true,
  })
  
  await app.listen(process.env.PORT ?? 3005);
}
bootstrap();
