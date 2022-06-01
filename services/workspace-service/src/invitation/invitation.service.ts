import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "../_prisma/prisma.service";

@Injectable()
export class InvitationService {
  constructor(private readonly prisma: PrismaService) {}
}
