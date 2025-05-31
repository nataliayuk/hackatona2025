import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
    controllers: [UserController],
    providers: [UserService, PrismaService],
})
export class UserModule {}
