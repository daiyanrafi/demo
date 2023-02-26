import { NestFactory } from '@nestjs/core';
import { NextFunction } from 'express';
import { AppModule } from './app.module';

function globalMiddleWareOne(req : Request, res : Response, next : NextFunction ){
  console.log('Global Middleware 1');
  next();
}


function globalMiddleWareTwo(req : Request, res : Response, next : NextFunction ){
  console.log('Global Middleware 2');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWareOne);
  app.use(globalMiddleWareTwo);
  await app.listen(3000);
}
bootstrap();
