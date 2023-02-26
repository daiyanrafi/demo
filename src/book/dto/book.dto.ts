import { IsInt, IsString } from "class-validator";

//validation
export class BookDto {

    @IsInt()
    id: number;

    @IsString()
    title: string;
}