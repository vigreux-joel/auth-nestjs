import { Global, Module } from '@nestjs/common';
import {PrismaService} from "./prisma.service";

@Global() // 👈 makes PrismaService globally available
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}