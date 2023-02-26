import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class BookMiddleWare implements NestMiddleware{

    use(req: Request, res: Response, next: NextFunction) {
        //console.log('Book Middleware');
        let protocol = req.protocol; //http or https
        let host = req.get('host'); //localhost:3000
        let url = req.originalUrl; // /book
        let method = req.method; // GET, POST, PUT, DELETE
        let date = new Date().toDateString();

        console.log(`${method} ${protocol}://${host}${url} ${date}`);

        next();
    }

}