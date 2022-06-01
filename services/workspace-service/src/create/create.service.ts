import { ConflictException, Injectable } from "@nestjs/common";
import { createActivityEvent } from "../_core/activity-events";
import { PrismaService } from "../_prisma/prisma.service";

@Injectable()
export class WorkspaceCreateService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ name, user: userID }: { name: string; user: string }) {
    try {
      // TODO: fetch userdata from accounts-services
      const user = {
        username: "test",
      };

      // - prevalidation - the workspace name should not conflict from any account from accounts-services.
      // check the name availability with accounts-services first.
      // TODO: implement above

      return this.prisma.workspace.create({
        data: {
          displayName: name,
          name: name,
          accessorName: name,
          members: {
            create: {
              userID: userID,
              level: "owner",
              profile: {
                name: user.username,
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
          plan: {
            paid: false,
            subscriptionId: null,
          },
        },
      });
    } catch (e) {
      console.error(e);
      throw new ConflictException("Workspace name is already taken");
    }
  }

  async checkNameAvailabilityForInitialCreation(
    name: string
  ): Promise<
    | { available: boolean }
    | {
        available: boolean;
        reason?: "name" | "accessor-name";
      }
  > {
    const existingWorkspacesWithName = await this.prisma.workspace.findMany({
      where: {
        OR: [{ accessorName: name }, { name: name }],
      },
      select: {
        id: true,
        displayName: true,
        accessorName: true,
        name: true,
      },
    });

    if (existingWorkspacesWithName.length === 0) {
      return { available: true };
    }

    const duplicates = existingWorkspacesWithName.map((workspace) => {
      if (workspace.name === name) {
        return { available: false, reason: "name" };
      }

      if (workspace.accessorName === name) {
        return { available: false, reason: "accessor-name" };
      }
    });

    return duplicates[0];
  }
}
