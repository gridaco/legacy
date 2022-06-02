import { Module } from "@nestjs/common";
import { InvitationService } from "./invitation.service";
import { InvitationsController } from "./invitation.controller";
import { PrismaModule, PrismaService } from "../_prisma";

@Module({
  imports: [PrismaModule],
  controllers: [InvitationsController],
  providers: [InvitationService, PrismaService],
})
export class InvitationsModule {}
