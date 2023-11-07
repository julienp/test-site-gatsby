import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  throw JSON.stringify({ banana: "yellow" });
  return new Response("Hello, world!");
};

export const config: Config = {
  path: "/user-error-4",
};
