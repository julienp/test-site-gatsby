const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
    multiValueHeaders: {
      "Set-Cookie": ["a=1", "b=2"],
    },
  };
};

export { handler };
