import { Elysia } from "elysia";

const app = new Elysia()

app.get("/", async (c) => {

  await new Promise(r => setTimeout(r, 1000))

  return {
    "hello": "world"
  }

})

app.listen(6161);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
