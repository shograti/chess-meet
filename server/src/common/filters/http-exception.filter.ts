// src/common/filters/http-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();
    const error = exceptionResponse['message'] || exceptionResponse['error'];

    response.status(status).json({
      statusCode: status,
      message: Array.isArray(error) ? error : [error],
      timestamp: new Date().toISOString(),
      path: ctx.getRequest().url,
    });
  }
}
