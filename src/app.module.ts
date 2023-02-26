import { Module } from '@nestjs/common';
import { BookController } from './book/book.controller';


@Module({
  imports: [],
  controllers: [BookController],
  providers: [],
})
export class AppModule {}
