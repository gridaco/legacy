import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "../_prisma/prisma.service";

@Injectable()
export class WorkspaceManagementService {
  constructor(private readonly prisma: PrismaService) {}

  async me({ user }: { user: User }) {
    const allworkspaces = await this.listWorkspaces(user);
    const myworkspace = await this.getPersonalWorkspace({ user });
    const lastworkspace = await this.getLastWorkspace(user);

    return {
      workspaces: allworkspaces,
      personal: myworkspace,
      current: lastworkspace,
    };
  }

  /**
   * list all workspaces the requester is a member of
   * @returns
   */
  async listWorkspaces({ uid }: { uid: string }) {
    const list = await this.prisma.workspace.findMany({
      where: {
        members: {
          some: {
            user: {
              uid: uid,
            },
          },
        },
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

    // validate read permission
    if (workspace) {
      const workspaceThatIAmMemberOf = await this.prisma.memberOnWorkspace.findFirst(
        {
          where: {
            workspace: {
              id: workspace.id,
            },
            user: {
              uid: "", // TODO: add auth
            },
          },
        }
      );

      if (workspaceThatIAmMemberOf) {
        return workspace;
      } else {
        // if not member, return only public informations
        return {
          id: workspace.id,
          name: workspace.name,
          displayName: workspace.displayName,
          avatar: workspace.avatar,
          logo: workspace.logo,
          twitter: workspace.twitter,
        };
      }
    }

    return new NotFoundException("Workspace not found");
  }

  async getLastWorkspace(p: { uid: string }) {
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

  /**
   * personal workspace is determined by the workspace name. if the workspace name matches the username (both unique), then it is a personal workspace.
   * so if the workspace name is changed, (not display name) then there would be no personal workspace for that user. (will be warned on client side.(not by this method))
   */
  async getPersonalWorkspace({ user }: { user: User }) {
    const { username, uid } = user;
    const maybePersonalWorkspaces = await this.prisma.workspace.findMany({
      where: {
        name: username,
        accessorName: username,
        AND: [
          {
            members: {
              some: {
                // one of the members should be the user
                // - must be owner
                // - must be the same user (validated by username)
                AND: [
                  {
                    user: {
                      uid: uid,
                    },
                  },
                  { level: "owner" },
                ],
              },
            },
          },
        ],
      },
    });

    if (maybePersonalWorkspaces.length) {
      // validate the workspace (by checking the owner)
    } else {
      return;
    }
  }

  async archiveWorkspace(p: { user: string; workspace: string }) {}

  async updateWorkspaceInformation() {}
}
