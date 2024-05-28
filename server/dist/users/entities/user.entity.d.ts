export declare class User {
    id: string;
    email: string;
    username: string;
    password: string;
    hashPassword(): Promise<void>;
    createdAt: Date;
    updatedAt: Date;
}
