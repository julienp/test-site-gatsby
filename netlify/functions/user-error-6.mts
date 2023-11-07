import type { Config, Context } from "@netlify/functions";
import fetch from "node-fetch";

export default async (req: Request, context: Context) => {
  try {
    await fetch("http://bananas-arent-real.example.com");
  } catch (error) {
    console.log({ error, isInstanceOfError: error instanceof Error });
    throw error;
  }
};

export const config: Config = {
  path: "/user-error-6",
};
