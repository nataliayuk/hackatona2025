import { Controller, Get } from "@nestjs/common";
import { UserService } from "./users.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Get()
    async findAll() {
    return await this.userService.findAll();
    }
}