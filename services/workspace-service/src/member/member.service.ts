import { ConflictException, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { createActivityEvent } from "../_core/activity-events";
import { PrismaService } from "../_prisma/prisma.service";

@Injectable()
export class MemberService {
  constructor(private readonly prisma: PrismaService) {}

  async registerMember({ uid }: { uid: string }) {
    // TODO: fetch me from accounts-services
    const gridauser = {
      username: "",
    };
    //
    let wssuser: User = await this.prisma.user.findUnique({
      where: { uid: uid },
    });

    if (!wssuser) {
      // create wss (workspace services) user
      wssuser = await this.prisma.user.create({
        data: {
          uid: uid,
          username: gridauser.username,
        },
      });

      const { id: userID } = wssuser;

      // create personal workspace initially
      await this.prisma.workspace.create({
        data: {
          plan: {
            paid: false, // TODO: use data from accounts-services. (since this is a personal workspace)
          },
          displayName: gridauser.username,
          name: gridauser.username,
          accessorName: gridauser.username,
          members: {
            create: {
              user: {
                connect: {
                  id: wssuser.id,
                },
              },
              level: "owner",
              profile: {
                name: gridauser.username,
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
      });
    }
    //
  }
}
