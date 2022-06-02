import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "../_prisma/prisma.service";

@Injectable()
export class WorkspaceManagementService {
  constructor(private readonly prisma: PrismaService) {}

  async me({ user }: { user: { username: string; uid: string } }) {
    const allworkspaces = await this.listWorkspaces(user);
    const myworkspace = await this.getPersonalWorkspace({ user });
    const lastworkspace = await this.getLastWorkspace(user);

    return {
      workspaces: allworkspaces,
      personal: myworkspace && myworkspace.id,
      current: lastworkspace && lastworkspace.id,
    };
  }

  /**
   * list all workspaces the requester is a member of
   * @returns
   */
  async listWorkspaces({ uid }: { uid: string }) {
    // TODO: simplify query - https://github.com/prisma/prisma/issues/13614
    const user = await this.prisma.user.findUnique({
      where: {
        uid: uid,
      },
      select: {
        id: true,
      },
    });

    const members = await this.prisma.memberOnWorkspace.findMany({
      where: {
        userID: user.id,
      },
      select: {
        id: true,
        workspaceID: true,
      },
    });

    const workspaces = members.map((m) => m.workspaceID);
    const list = await this.prisma.workspace.findMany({
      where: {
        id: {
          in: workspaces,
        },
      },
      include: {
        members: true,
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
          website: workspace.website,
        };
      }
    }

    return new NotFoundException("Workspace not found");
  }

  async getLastWorkspace({ uid }: { uid: string }) {
    // primary = last used

    const user = await this.prisma.user.findUnique({
      where: {
        uid: uid,
      },
      select: {
        id: true,
      },
    });

    const workspace = (
      await this.prisma.activityLog.findFirst({
        orderBy: {
          at: "asc", // check this (asc? desc?)
        },
        where: {
          userID: user.id,
        },
        include: {
          workspace: true,
        },
      })
    )?.workspace;

    return workspace;
  }

  /**
   * personal workspace is determined by the workspace name. if the workspace name matches the username (both unique), then it is a personal workspace.
   * so if the workspace name is changed, (not display name) then there would be no personal workspace for that user. (will be warned on client side.(not by this method))
   */
  async getPersonalWorkspace({
    user,
  }: {
    user: { username: string; uid: string };
  }) {
    const { username, uid } = user;

    const _user = await this.prisma.user.findUnique({
      where: {
        uid: uid,
      },
      select: {
        id: true,
      },
    });

    const workspace = await this.prisma.workspace.findUnique({
      where: {
        name: username,
      },
      select: {
        id: true,
      },
    });

    const member = await this.prisma.memberOnWorkspace.findFirst({
      where: {
        userID: _user.id,
        workspaceID: workspace.id,
        level: "owner",
      },
      select: {
        id: true,
      },
    });

    const maybepersonal = await this.prisma.workspace.findFirst({
      where: {
        id: workspace.id,
        // members: {
        //   some: {
        //     id: member.id,
        //   },
        // },
      },
      include: { members: true },
    });

    if (maybepersonal.members.some((m) => m.id === member.id)) {
      return maybepersonal;
    }

    // const maybePersonalWorkspaces = await this.prisma.workspace.findFirst({
    //   where: {
    //     name: username,
    //     accessorName: username,
    //     members: {
    //       some: {
    //         // one of the members should be the user
    //         // - must be owner
    //         // - must be the same user (validated by username)
    //         AND: [
    //           {
    //             user: {
    //               uid: uid,
    //             },
    //           },
    //           { level: "owner" },
    //         ],
    //       },
    //     },
    //   },
    // });

    // return maybePersonalWorkspaces;
  }

  async archiveWorkspace(p: { user: string; workspace: string }) {}

  async updateWorkspaceInformation() {}
}
