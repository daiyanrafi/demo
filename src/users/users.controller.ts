import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {


  @Post()
  addUser(): string {
    return 'This action adds a new user';
  }

  @Get()
  findAllUser(): string {
    return 'This action returns all users';
  }

}
