import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class BookGuard implements CanActivate {
  // public key : string = 'fbiwefwbeffnll@eijf';

  public username: string = 'admin';
  public password: string = '1234';

  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    // console.log('BookGuard');
    // return true;

    // if(request.header('keys') == undefined) return false;

    if (
      request.header('username') == undefined ||
      request.header('password') == undefined)
      return false;

    return (
      request.header('username') == this.username &&
      request.header('password') == this.password
    );
  }
}
