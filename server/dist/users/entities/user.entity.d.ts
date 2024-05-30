import { Event } from 'src/events/entities/event.entity';
export declare class User {
    id: string;
    email: string;
    username: string;
    password: string;
    createdEvents: Event[];
    participatedEvents: Event[];
    hashPassword(): Promise<void>;
    createdAt: Date;
    updatedAt: Date;
}
