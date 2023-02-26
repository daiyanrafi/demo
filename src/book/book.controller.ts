import { Controller, Get, Post, Put, Delete, Param, ParseIntPipe, ParseBoolPipe, Body } from '@nestjs/common';
import { BookDto } from './dto/book.dto';
import { BookPipe } from './pipes/book.pipe';

@Controller('book')
export class BookController{

    @Get('/:id')
    findBookById(@Param("id", ParseIntPipe) id : number ) : string {
        console.log(id, typeof(id));
        return 'This is a book';
    }

    @Post('/add')
    addBook(@Body( new BookPipe()) book : BookDto) : string {
        return "Book added";
    }
}