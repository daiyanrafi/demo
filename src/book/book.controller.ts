import { Controller, Get } from "@nestjs/common";


@Controller('book')
export class BookController {

    @Get('')
    helloBookApi(): string {
        return 'Hello Book API';
    }
}