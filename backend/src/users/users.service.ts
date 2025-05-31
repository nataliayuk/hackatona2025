import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { UserDto } from "./dto/userDto";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
    return await this.prisma.user.findMany();
    }

    async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
        where: { 
        id: id 
        },
    })
        if (!user) throw new HttpException("Não existe um usuário com esse id",  HttpStatus.NOT_FOUND);
        return user;
    }


    async create(createUserDto: UserDto) {
    return await this.prisma.user.create({
        data: {
        ...createUserDto,
        },
        });
    }
}