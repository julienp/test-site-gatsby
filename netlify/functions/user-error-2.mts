import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  throw { "i-am-an-object": "hello" };
  return new Response("Hello, world!");
};

export const config: Config = {
  path: "/user-error",
};
