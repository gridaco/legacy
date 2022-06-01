import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { RegisterMemberDto } from "./member.entity";
import { MemberService } from "./member.service";

@Controller("members")
export class MembersController {
  constructor(private readonly service: MemberService) {}

  /**
   * initially register Grida user to workspace services.
   * @param body
   */
  @Post("/register")
  async register(@Body() body: RegisterMemberDto) {
    //
  }

  @Post("/leave")
  async leaveWorkspace(@Body() body: any) {
    // TODO:
  }
}
