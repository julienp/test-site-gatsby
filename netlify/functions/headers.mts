import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const headers = new Headers([
    ["Set-Cookie", "lulu=meow; Max-Age=3600; Path=/; SameSite=Lax"],
    ["Set-Cookie", "booya=kasha; Max-Age=3600; Path=/; SameSite=Lax"],
  ]);

  return new Response("Hello", {
    headers: headers,
  });
};

export const config: Config = {
  path: "/headers",
};
