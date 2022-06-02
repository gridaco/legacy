import { Module } from "@nestjs/common";
import { WorkspaceManagementService } from "./workspace.service";
import { WorkspaceManagementController } from "./workspace.controller";
import { PrismaModule, PrismaService } from "../_prisma";

@Module({
  imports: [PrismaModule],
  controllers: [WorkspaceManagementController],
  providers: [WorkspaceManagementService, PrismaService],
})
export class WorkspaceModule {}
