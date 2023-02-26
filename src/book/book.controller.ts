 import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { BookGuard } from "./book.guard";


@Controller('book')
// @UseGuards(new BookGuard())

export class BookController {

    @Get('/findAll')
    findAllBooks(): string {
        return 'Hello Book API';
    }


    @Post('/add')
    addBook(): string {
        return 'Hello Book API';
    }
}