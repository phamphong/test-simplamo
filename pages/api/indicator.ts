import { NextApiRequest, NextApiResponse } from "next";
import data from '@/mock/indicators.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({
      data: data
    })
  }
}
