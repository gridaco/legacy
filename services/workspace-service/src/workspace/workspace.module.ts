import { Module } from "@nestjs/common";
import { WorkspaceManagementService } from "./workspace.service";
import { WorkspaceManagementController } from "./workspace.controller";
import { PrismaService } from "../_prisma";

@Module({
  imports: [],
  controllers: [WorkspaceManagementController],
  providers: [PrismaService, WorkspaceManagementService],
})
export class WorkspaceModule {}
