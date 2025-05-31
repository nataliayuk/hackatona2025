import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { UserService } from "./users.service";
import { UserDto } from "./dto/userDto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll() {
    return await this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe ) id: number) {
    return await this.userService.findOne(id);
    }

    @Post()
    async create(@Body() createUserDto: UserDto) {
    return await this.userService.create(createUserDto);
    }
}