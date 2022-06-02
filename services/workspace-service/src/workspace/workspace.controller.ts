import { Controller, Get, Param, Req, UseGuards } from "@nestjs/common";
import { GridaAccountAuthGuard } from "../_auth";
import { WorkspaceManagementService } from "./workspace.service";
import { Request } from "express";

@Controller("/")
@UseGuards(GridaAccountAuthGuard)
export class WorkspaceManagementController {
  constructor(private readonly service: WorkspaceManagementService) {}

  @Get("/")
  listWorkspaces(@Req() req: Request) {
    return this.service.me({
      user: { uid: req.account.id, username: req.account.username },
    });
  }

  @Get("/last")
  getLastUsedWorkspace() {
    const userid = ""; // TODO: add auth
    this.service.getLastWorkspace({
      uid: userid,
    });
  }

  @Get("/:id")
  getWorkspace(@Param("id") id: string) {
    const workspaceid = id;
    this.service.getWorkspace({
      id: workspaceid,
    });
  }
}
