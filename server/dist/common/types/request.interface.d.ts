/// <reference types="cookie-parser" />
import { Request } from 'express';
export interface AuthenticatedRequest extends Request {
    user: {
        userId: string;
        username: string;
    };
}