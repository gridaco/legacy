import { Module } from "@nestjs/common";
import { WorkspaceCreateService } from "./create.service";
import { WorkspaceCreateController } from "./create.controller";
import { PrismaService } from "../_prisma";

@Module({
  imports: [],
  controllers: [WorkspaceCreateController],
  providers: [PrismaService, WorkspaceCreateService],
})
export class WorkspaceCreateModule {}
