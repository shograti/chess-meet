import { EntityManager } from 'typeorm';
import { Event } from './entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsService {
    private entityManager;
    constructor(entityManager: EntityManager);
    create(userId: string, createEventDto: CreateEventDto): Promise<Event>;
    findAll(): Promise<Event[]>;
    findOne(id: string): Promise<Event>;
    update(id: number, updateEventDto: UpdateEventDto): string;
    remove(id: number): string;
}
