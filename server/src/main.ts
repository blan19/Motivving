import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 4001;

  app.use(cookieParser());
  app.enableCors({ credentials: true, origin: true });

  await app.listen(PORT);
  console.log(`Listening on Port: ${PORT}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
