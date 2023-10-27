export default function handler(req, res) {
  throw new Error("oh no, the gatsby function has a user error");
  res.status(200).json({ hello: `world` });
}
