import type { Config, Context } from "@netlify/functions";

class MyCoolError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "MyCoolErrorName";
  }
}

export default async (req: Request, context: Context) => {
  throw new MyCoolError("oh dear");
};

export const config: Config = {
  path: "/user-error-7",
};
