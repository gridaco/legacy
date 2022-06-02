import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { Request } from "express";
import { GridaAccountAuthGuard } from "../_auth";
import { RegisterMemberDto } from "./member.entity";
import { MemberService } from "./member.service";

@UseGuards(GridaAccountAuthGuard)
@Controller("members")
export class MembersController {
  constructor(private readonly service: MemberService) {}

  /**
   * initially register Grida user to workspace services.
   * @param body
   */
  @Post("/register")
  async register(@Req() req: Request, @Body() body: RegisterMemberDto) {
    const { id: uid, username, profileImage: avatar } = req.account;
    return this.service.registerMember({ uid, username, avatar });
  }

  @Post("/leave")
  async leaveWorkspace(@Body() body: any) {
    // TODO:
  }
}
