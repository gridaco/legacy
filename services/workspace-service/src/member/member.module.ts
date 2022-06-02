import { Module } from "@nestjs/common";
import { MemberService } from "./member.service";
import { MembersController } from "./member.controller";
import { PrismaModule, PrismaService } from "../_prisma";

@Module({
  imports: [PrismaModule],
  controllers: [MembersController],
  providers: [MemberService, PrismaService],
})
export class MembersModule {}
