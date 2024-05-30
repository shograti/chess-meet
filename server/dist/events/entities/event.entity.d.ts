import { User } from '../../users/entities/user.entity';
export declare class Event {
    id: string;
    name: string;
    description: string;
    startDate: Date;
    address: string;
    latitude: string;
    longitude: string;
    gamepace: string;
    areBoardAndPiecesProvided: boolean;
    cashprize: number | null;
    creator: User;
    participants: User[];
    createdAt: Date;
    updatedAt: Date;
}
