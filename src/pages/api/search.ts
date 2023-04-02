import { NextApiRequest, NextApiResponse } from "next";
import { transformBookData } from "@lib/helpers";
import { fetchBooksByTitleAndAuthor } from "@lib/api";

const searchBooks = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const { author, title } = query;

  const books = await fetchBooksByTitleAndAuthor(
    author as string,
    title as string
  );

  if (!books?.length) return res.status(404).send({ success: false });

  const data = books.map((b) => transformBookData(b));

  res.status(200).json({ message: "success", books: data });
};

export default searchBooks;
