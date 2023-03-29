import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { transformBookData } from "@/lib/helpers";
import { fetchBookByTitleAndAuthor } from "@/lib/api";

const saveBook = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const { author, title } = query;
  const prisma = new PrismaClient();

  const book = await fetchBookByTitleAndAuthor(
    author as string,
    title as string
  );

  if (!book) return res.status(404).send({ success: false });

  const data = transformBookData(book);

  try {
    await prisma.book.create({
      data,
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

export default saveBook;
