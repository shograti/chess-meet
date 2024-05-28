import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager } from 'typeorm';
import { User } from './entities/user.entity';
import { Logger } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly entityManager: EntityManager) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = this.entityManager.create(User, createUserDto);
      await this.entityManager.save(User, newUser);
      return newUser;
    } catch (error) {
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

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
