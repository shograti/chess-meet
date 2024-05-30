import {
  ConflictException,
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Event } from './entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Logger } from '@nestjs/common';

@Injectable()
export class EventsService {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  async create(userId: string, createEventDto: CreateEventDto) {
    try {
      const user = await this.entityManager.findOne(User, {
        where: {
          id: userId,
        },
      });
      if (!user) {
        throw new NotFoundException('User not found.');
      }

      // TODO : retrieve the coordinates using the address

      const event = this.entityManager.create(Event, {
        ...createEventDto,
        creator: user,
      });

      await this.entityManager.save(Event, event);
      return event;
    } catch (error) {
      Logger.error(error);
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Duplicate event entry.');
      }
      throw new InternalServerErrorException(
        'Internal server error. Please try again later.',
      );
    }
  }

  async findAll() {
    try {
      return await this.entityManager.find(Event);
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException('Failed to retrieve events.');
    }
  }

  async findOne(id: string) {
    try {
      const event = await this.entityManager.findOne(Event, {
        where: {
          id,
        },
      });
      if (!event) {
        throw new NotFoundException(`Event with ID ${id} not found.`);
      }
      return event;
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException('Failed to retrieve the event.');
    }
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
