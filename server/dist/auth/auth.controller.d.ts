import { AuthService } from './auth.service';
import { Response } from 'express';
import { SignInDto } from './dto/sign-in.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(credentials: SignInDto, response: Response): Promise<void>;
}
