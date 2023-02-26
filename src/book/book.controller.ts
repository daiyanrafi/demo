
import { Controller, Get, Post } from '@nestjs/common';

@Controller('book')
export class BookController {


  @Post()
  addUser(): string {
    return 'This action adds a new user';
  }

  @Get()
  findAllUser(): string {
    return 'This action returns all users';
  }

}

