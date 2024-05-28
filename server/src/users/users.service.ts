import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager } from 'typeorm';
import { User } from './entities/user.entity';
import { Logger } from '@nestjs/common';

type UserWithoutPassword = Omit<User, 'password' | 'hashPassword'>;

@Injectable()
export class UsersService {
  constructor(private readonly entityManager: EntityManager) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = this.entityManager.create(User, createUserDto);
      await this.entityManager.save(User, newUser);
      newUser.password = undefined;
      return newUser;
    } catch (error) {
      Logger.error(error);
      if (error.code === 'ER_DUP_ENTRY') {
        if (error.message.includes('UQ_USER_EMAIL')) {
          throw new ConflictException('Email already exists.');
        } else if (error.message.includes('UQ_USER_USERNAME')) {
          throw new ConflictException('Username already exists.');
        }
      }
      throw new InternalServerErrorException(
        'Internal server error. Please try again later.',
      );
    }
  }

  async findOneByEmailOrUsername(
    emailOrUsername: string,
  ): Promise<User | undefined> {
    return await this.entityManager
      .createQueryBuilder(User, 'user')
      .where(
        'user.email = :emailOrUsername OR user.username = :emailOrUsername',
        { emailOrUsername },
      )
      .addSelect('user.password')
      .getOne();
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return `This action returns a user`;
  }

  async getProfile(id: string): Promise<UserWithoutPassword | undefined> {
    const user = await this.entityManager.findOne(User, {
      where: { id: id },
    });

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
