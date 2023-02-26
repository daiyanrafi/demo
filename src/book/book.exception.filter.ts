import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

//catch is decorator
@Catch(HttpException)
export class BookCustomExceptionFilter implements ExceptionFilter{


    catch(exception: HttpException, host: ArgumentsHost): any {
        const context = host.switchToHttp();
        const response = context.getResponse<Response>();
        const request = context.getRequest<Request>();
        const status = exception.getStatus(); //400

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            host: request.get('host'),
        });

    }
}