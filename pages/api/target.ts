import { readFile, readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const mockFolder = path.join(process.cwd(), 'mock');
    let data = readFileSync(path.join(mockFolder, "targets.json"), { encoding: "utf8" })
    res.status(200).json({
      data: JSON.parse(data)
    })
  }
}
