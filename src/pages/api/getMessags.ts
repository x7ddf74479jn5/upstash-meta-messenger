import { NextApiRequest, NextApiResponse } from "next";
import { Message } from "../../../typings";
import { redis } from "../../lib/redis";

type Data = {
  messages: Message[];
};

type ErrorData = {
  body: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | ErrorData>) {
  if (req.method !== "GET") {
    res.status(405).json({ body: "Method not allowed" });
    return;
  }

  const messagesRes = await redis.hvals("message");
  const messages: Message[] = messagesRes
    .map((message) => JSON.parse(message))
    .sort((a, b) => b.created_at - a.creatad_at);

  res.status(200).json({ messages });
}
