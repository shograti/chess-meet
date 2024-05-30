"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const event_entity_1 = require("./entities/event.entity");
const common_2 = require("@nestjs/common");
let EventsService = class EventsService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async create(userId, createEventDto) {
        try {
            const user = await this.entityManager.findOne(user_entity_1.User, {
                where: {
                    id: userId,
                },
            });
            if (!user) {
                throw new common_1.NotFoundException('User not found.');
            }
            const event = this.entityManager.create(event_entity_1.Event, {
                ...createEventDto,
                creator: user,
            });
            await this.entityManager.save(event_entity_1.Event, event);
            return event;
        }
        catch (error) {
            common_2.Logger.error(error);
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.ConflictException('Duplicate event entry.');
            }
            throw new common_1.InternalServerErrorException('Internal server error. Please try again later.');
        }
    }
    async findAll() {
        try {
            return await this.entityManager.find(event_entity_1.Event);
        }
        catch (error) {
            common_2.Logger.error(error);
            throw new common_1.InternalServerErrorException('Failed to retrieve events.');
        }
    }
    async findOne(id) {
        try {
            const event = await this.entityManager.findOne(event_entity_1.Event, {
                where: {
                    id,
                },
            });
            if (!event) {
                throw new common_1.NotFoundException(`Event with ID ${id} not found.`);
            }
            return event;
        }
        catch (error) {
            common_2.Logger.error(error);
            throw new common_1.InternalServerErrorException('Failed to retrieve the event.');
        }
    }
    update(id, updateEventDto) {
        return `This action updates a #${id} event`;
    }
    remove(id) {
        return `This action removes a #${id} event`;
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeorm_1.EntityManager])
], EventsService);
//# sourceMappingURL=events.service.js.map