import { Module } from "@nestjs/common";
import { MemberService } from "./member.service";
import { MembersController } from "./member.controller";
import { PrismaService } from "../_prisma";

@Module({
  imports: [],
  controllers: [MembersController],
  providers: [PrismaService, MemberService],
})
export class MembersModule {}
