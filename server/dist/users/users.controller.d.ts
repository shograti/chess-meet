import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthenticatedRequest } from 'src/common/types/request.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: AuthenticatedRequest): Promise<{
        username: string;
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        createdEvents: import("../events/entities/event.entity").Event[];
        participatedEvents: import("../events/entities/event.entity").Event[];
    }>;
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
