import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { CreateInvitationDto } from "./invitation.entity";
import { InvitationService } from "./invitation.service";

@Controller("invitations")
export class InvitationsController {
  constructor(private readonly service: InvitationService) {}

  @Post("/")
  async invite(@Body() body: CreateInvitationDto) {}

  @Post("/accept")
  async acceptInvitation(@Body() body: any) {}

  @Post("/reject")
  async declineInvitation(@Body() body: any) {}
}
