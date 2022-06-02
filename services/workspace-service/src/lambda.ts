import { configure as serverlessExpress } from "@vendia/serverless-express";
import { initApp } from "./app";

let cachedServer;

export const handler = async (event, context) => {
  if (!cachedServer) {
    const app = await initApp();
    await app.init();
    cachedServer = serverlessExpress({
      app: app.getHttpAdapter().getInstance(),
    });
  }

  return cachedServer(event, context);
};
