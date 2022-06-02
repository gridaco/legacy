import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import {
  verifyAccountFromRequest,
  AccountsServicesUserVerifyAndProfileResponse,
} from "./api";

@Injectable()
export class GridaAccountAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const account = await verifyAccountFromRequest(request);
    if (account) {
      request.account = account;
      return true;
    }
    return false;
  }
}

// @Injectable()
// export class WorkspaceServiceUserAuthGuard implements CanActivate {
//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request = context.switchToHttp().getRequest();
//     const account = await verifyAccountFromRequest(request);
//     request.account = account;
//     // read user form db
//     return true;
//     return false;
//   }
// }

// extend Request with account (for ts types)
// import { Request } from "express";
declare module "express" {
  interface Request {
    account: AccountsServicesUserVerifyAndProfileResponse;
  }
}
