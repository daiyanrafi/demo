import { BadRequestException, Controller, Get, UseFilters } from "@nestjs/common";
import { BookException } from "./book.exception";
import { BookCustomExceptionFilter } from "./book.exception.filter";


@Controller('book')
export class BookController {

    //DEFAULT EXCEPTION**********
    // @Get('')
    // helloBookApi(): string {
    //     throw new BadRequestException({
    //         message: 'Bad Request rafi',
    //         statusCode: 400,
    //         error: 'rafi you okay bruh'
    //     });
    //     return 'Hello Book API';
    // }


    //CUSTOM EXCEPTION***********
    // @Get('')
    // helloBookApi(): string {
    //     throw new BookException();
    //     return 'Hello Book API';
    // }

    //custom exception filter**********
    @Get('')
    @UseFilters(BookCustomExceptionFilter)
    helloBookApi(): string {
        throw new BadRequestException();
        return 'Hello Book API';
    }
} 