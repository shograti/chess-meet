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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async create(createUserDto) {
        try {
            const newUser = this.entityManager.create(user_entity_1.User, createUserDto);
            await this.entityManager.save(user_entity_1.User, newUser);
            return newUser;
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                if (error.message.includes('UQ_USER_EMAIL')) {
                    throw new common_1.ConflictException('Email already exists.');
                }
                else if (error.message.includes('UQ_USER_USERNAME')) {
                    throw new common_1.ConflictException('Username already exists.');
                }
            }
            throw new common_1.InternalServerErrorException('Internal server error. Please try again later.');
        }
    }
    findAll() {
        return `This action returns all users`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager])
], UsersService);
//# sourceMappingURL=users.service.js.map