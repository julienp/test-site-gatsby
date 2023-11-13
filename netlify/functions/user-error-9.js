import isEven from "is-even";

const handler = async (event, context) => {
  const X = isEven(2);
  throw new Error(`lambda API style function has an error! isEven(2)=${X}`);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World", X }),
  };
};

export { handler };
