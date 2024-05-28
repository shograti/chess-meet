import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(emailOrUsername: string, pass: string): Promise<User | null>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
