import { Module } from "@nestjs/common";
import { WorkspaceCreateModule } from "./create";
import { WorkspaceModule } from "./workspace";
import { MembersModule } from "./member";
import { PrismaModule } from "./_prisma";
import { InvitationsModule } from "./invitation";

@Module({
  imports: [
    PrismaModule,
    WorkspaceModule,
    WorkspaceCreateModule,
    MembersModule,
    InvitationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
