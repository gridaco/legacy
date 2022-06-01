import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import {
  CreateWorkspaceDto,
  WorkspaceNameVaildationDto,
} from "./create.entity";
import { WorkspaceCreateService } from "./create.service";

@Controller("create")
export class WorkspaceCreateController {
  constructor(private readonly service: WorkspaceCreateService) {}

  @Post("/")
  async start(@Body() body: CreateWorkspaceDto) {
    const payload = {
      ...body,
      user: "", // TODO:
    };

    return this.service.create(payload);
  }

  @Get("/name-check")
  async checkIfNameIsAvailable(@Query() { name }: WorkspaceNameVaildationDto) {
    return await this.service.checkNameAvailabilityForInitialCreation(name);
  }
}
