import { NextApiRequest, NextApiResponse } from "next";
import { transformBookData } from "@lib/helpers";
import { fetchBookByTitleAndAuthor } from "@lib/api";
import { createBookInDb } from "@lib/db";

const saveBook = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const { author, title } = query;

  const book = await fetchBookByTitleAndAuthor(
    author as string,
    title as string
  );

  if (!book) return res.status(404).send({ success: false });

  const data = transformBookData(book);

  const isSuccessful = await createBookInDb(data);

  isSuccessful
    ? res.status(200).json({ message: "success" })
    : res.status(500).send({ success: false });
};

export default saveBook;
