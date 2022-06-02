import Axios from "axios";
import { Request } from "express";
import { env } from "process";

const client = Axios.create({
  baseURL: "https://accounts.services.grida.co",
  withCredentials: true,
});

export type AccountsServicesUserVerifyAndProfileResponse = {
  id: string;
  username: string;
  email: string;
  createdAt: Date | string;
  profileImage?: string;
  bio?: string;
};

export async function verifyAccountFromRequest(
  req: Request
): Promise<AccountsServicesUserVerifyAndProfileResponse | false> {
  try {
    const token = req.cookies[env.COOKIE_ACCESS_TOKEN_KEY];
    return (
      await client.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    ).data;
  } catch (e) {
    return false;
  }
}
