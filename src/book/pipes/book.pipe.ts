import { ArgumentMetadata, Injectable, BadRequestException, PipeTransform } from '@nestjs/common';
import { BookDto } from '../dto/book.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export class BookPipe implements PipeTransform {

    // transform(value: any, metadata: ArgumentMetadata): any {
    //     if(value.id == 1) return value;
    //     else throw new BadRequestException('Validation failed');

    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        //class transformer obj convert to class
        //class structure-bookdto, obj value - value
        const bookClass = plainToInstance(BookDto, value);

        //class validator
        const errors = await validate(bookClass);

        if(errors.length > 0){
            throw new BadRequestException('Validation failed', JSON.stringify(errors));
        }

        console.log(value, typeof(value));
        return value;

    }

} 