import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  throw { errorType: "object", errorMessage: "something" };
  return new Response("Hello, world!");
};

export const config: Config = {
  path: "/user-error-5",
};
