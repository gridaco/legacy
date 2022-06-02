import { ConflictException, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { createActivityEvent } from "../_core/activity-events";
import { PrismaService } from "../_prisma/prisma.service";

@Injectable()
export class MemberService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * 1. register a Grida user to workspace services. (if non exsits)
   * 2. create a workspace for the user (creates personal workspace).
   */
  async registerMember({
    uid,
    username,
    avatar,
  }: {
    uid: string;
    username: string;
    avatar?: string;
  }) {
    //
    let wssuser: User = await this.prisma.user.findUnique({
      where: { uid: uid },
    });

    if (!wssuser) {
      // create wss (workspace services) user
      wssuser = await this.prisma.user.create({
        data: {
          uid: uid,
          username: username,
        },
      });
    }

    const { id: userID } = wssuser;

    // create personal workspace initially
    const personalWorkspace = await this.prisma.workspace.create({
      data: {
        plan: {
          paid: false, // TODO: use data from accounts-services. (since this is a personal workspace)
        },
        displayName: username,
        name: username,
        accessorName: username,
        avatar: avatar,
        members: {
          create: {
            user: {
              connect: {
                id: wssuser.id,
              },
            },
            level: "owner",
            profile: {
              name: username,
              avatar: avatar,
            },
          },
        },
        activities: {
          createMany: {
            data: [
              createActivityEvent({ event: "workspace-created", userID }),
              createActivityEvent({ event: "member-joined", userID }),
            ],
          },
        },
      },
      include: {
        members: true,
      },
    });
    //

    return {
      workspace: personalWorkspace,
      user: wssuser,
      member: personalWorkspace.members[0],
    };
  }
}
