import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  @IsNotEmpty({ message: 'Username or email must be provided.' })
  emailOrUsername: string;

  @IsString()
  @IsNotEmpty({ message: 'Password must be provided.' })
  password: string;
}
