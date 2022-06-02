import { initApp } from "./app";

async function bootstrap() {
  const app = await initApp();
  app.listen(4401, () => console.log("Microservice is listening"));
}
bootstrap();
