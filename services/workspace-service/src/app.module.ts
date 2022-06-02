import { Module } from "@nestjs/common";
import { WorkspaceCreateModule } from "./create";
import { WorkspaceModule } from "./workspace";
import { MembersModule } from "./member";
import { InvitationsModule } from "./invitation";

@Module({
  imports: [
    WorkspaceModule,
    WorkspaceCreateModule,
    MembersModule,
    InvitationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
