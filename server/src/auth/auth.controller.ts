import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signIn(@Body() credentials: SignInDto, @Res() response: Response) {
    try {
      const user = await this.authService.validateUser(
        credentials.emailOrUsername,
        credentials.password,
      );
      const loginResponse = await this.authService.login(user);

      response.cookie('Authentication', loginResponse.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'strict',
      });

      response.status(HttpStatus.OK).send();
    } catch (error) {
      Logger.log(error);
      response
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Invalid credentials.' });
    }
  }

  @Post('logout')
  async logout(@Res() response: Response) {
    response.cookie('Authentication', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'strict',
      expires: new Date(0),
    });

    response
      .status(HttpStatus.OK)
      .send({ message: 'Logged out successfully.' });
  }
}
