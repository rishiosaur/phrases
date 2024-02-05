// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Client } from "@notionhq/client";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const res = await notion.
  // res.status(200).json({ name: "John Doe" });
}
