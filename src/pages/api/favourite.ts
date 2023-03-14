import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const deleteBook = async (req: NextApiRequest, res: NextApiResponse) => {
  const { isbn, fav } = req.query;
  const prisma = new PrismaClient();
  try {
    await prisma.book.update({
      where: { isbn: isbn?.toString() },
      data: { isFavourite: fav === "true" ? true : false },
    });
    await prisma.$disconnect();
    res.status(200).json({ message: "success" });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    res.status(500).send({ success: false });
    process.exit(1);
  }
};

export default deleteBook;
