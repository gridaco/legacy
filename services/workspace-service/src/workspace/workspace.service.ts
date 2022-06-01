import { Injectable } from "@nestjs/common";
import { PrismaService } from "../_prisma/prisma.service";

@Injectable()
export class WorkspaceManagementService {
  constructor(private readonly prisma: PrismaService) {}

  async myworkspace(p: { user: string }) {
    const allworkspaces = await this.listWorkspaces(p);
    const myworkspace = await this.getPersonalWorkspace(p);
    const lastworkspace = await this.getLastWorkspace(p);

    return {
      workspaces: allworkspaces,
      personal: myworkspace,
      current: lastworkspace,
    };
  }

  async listWorkspaces(p: { user: string }) {
    const list = await this.prisma.workspace.findMany({
      where: {
        // query by owner (requester)
      },
    });
    return list;
  }

  async getWorkspace(p: { id: string }) {
    const workspace = await this.prisma.workspace.findUnique({
      where: {
        id: p.id,
      },
    });

    return workspace;
  }

  async getLastWorkspace(p: { user: string }) {
    // primary = last used
    const userid = "";
    const workspace = await this.prisma.workspace.findFirst({
      orderBy: {
        updatedAt: "asc", // check this (asc? desc?)
      },
      where: {
        id: userid,
      },
    });

    return workspace;
  }

  async getPersonalWorkspace(p: { user: string }) {
    // personal = default created under user's name
  }

  async createWorkspace(p: { user: string; workspace: string }) {}

  async archiveWorkspace(p: { user: string; workspace: string }) {}

  async updateWorkspaceInformation() {}
}
