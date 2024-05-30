import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { AuthenticatedRequest } from 'src/common/types/request.interface';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(req: AuthenticatedRequest, createEventDto: CreateEventDto): Promise<import("./entities/event.entity").Event>;
    findAll(): Promise<import("./entities/event.entity").Event[]>;
    findOne(id: string): Promise<import("./entities/event.entity").Event>;
    update(id: string, updateEventDto: UpdateEventDto): string;
    remove(id: string): string;
}
