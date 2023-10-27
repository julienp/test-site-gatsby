import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);

  if (url.searchParams.get("method") !== "user-error") {
    return context.next();
  }

  console.log(`Going to blow up with a user error ${url}`);

  throw new Error(`This is a fake user error`);
  const response = await context.next();
  return response;
};
