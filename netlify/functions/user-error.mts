import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  throw new Error("woops this is a user error");
  return new Response("Hello, world!");
};

export const config: Config = {
  path: "/user-error",
};
