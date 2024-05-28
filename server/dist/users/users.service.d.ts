import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager } from 'typeorm';
import { User } from './entities/user.entity';
type UserWithoutPassword = Omit<User, 'password' | 'hashPassword'>;
export declare class UsersService {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOneByEmailOrUsername(emailOrUsername: string): Promise<User | undefined>;
    findAll(): string;
    findOne(id: string): string;
    getProfile(id: string): Promise<UserWithoutPassword | undefined>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
export {};
