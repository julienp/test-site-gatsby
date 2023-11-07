import type { Config, Context } from "@netlify/functions";
import fetch from "node-fetch";

export default async (req: Request, context: Context) => {
  await fetch("http://bananas-arent-real.example.com");
};

export const config: Config = {
  path: "/user-error-6",
};
