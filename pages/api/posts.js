import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Create new post
  if (req.method === "POST") {
    try {
      const { image, title, description, text, likes } = req.body;
      const post = await prisma.posts.create({
        data: { image, title, description, text, likes },
      });
      res.status(200).json(home);
    }
    //Catch error 
    catch (e) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }

  // HTTP method not supported!
  else {
    res.setHeader("Allow", ["POST"]);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
