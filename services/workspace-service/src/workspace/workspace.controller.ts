import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { WorkspaceManagementService } from "./workspace.service";

@Controller("/")
export class WorkspaceManagementController {
  constructor(private readonly service: WorkspaceManagementService) {}

  @Get("/")
  listWorkspaces() {
    const userid = ""; // TODO: add auth
    return this.service.myworkspace({
      user: userid,
    });
  }

  @Get("/last")
  getLastUsedWorkspace() {
    const userid = ""; // TODO: add auth
    this.service.getLastWorkspace({
      user: userid,
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
