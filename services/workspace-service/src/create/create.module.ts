import { Module } from "@nestjs/common";
import { WorkspaceCreateService } from "./create.service";
import { WorkspaceCreateController } from "./create.controller";
import { PrismaModule, PrismaService } from "../_prisma";

@Module({
  imports: [PrismaModule],
  controllers: [WorkspaceCreateController],
  providers: [WorkspaceCreateService, PrismaService],
})
export class WorkspaceCreateModule {}
