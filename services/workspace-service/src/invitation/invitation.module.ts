import { Module } from "@nestjs/common";
import { InvitationService } from "./invitation.service";
import { InvitationsController } from "./invitation.controller";
import { PrismaService } from "../_prisma";

@Module({
  imports: [],
  controllers: [InvitationsController],
  providers: [PrismaService, InvitationService],
})
export class InvitationsModule {}
