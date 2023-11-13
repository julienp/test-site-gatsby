import whoops from "does-not-exist";

const handler = async (event, context) => {
  const X = whoops();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World", X }),
  };
};

export { handler };
