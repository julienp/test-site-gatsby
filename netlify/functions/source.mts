import fs from "node:fs";
import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const b = fs.readFileSync("/var/runtime/index.mjs");
  return new Response(b.toString());
};

export const config: Config = {
  path: "/source",
};
