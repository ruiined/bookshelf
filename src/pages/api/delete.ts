import { deleteBookInDb } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

const deleteBook = async (req: NextApiRequest, res: NextApiResponse) => {
  const { isbn } = req.query;

  const isSuccessful = await deleteBookInDb(isbn?.toString() ?? "");

  isSuccessful
    ? res.status(200).json({ message: "success" })
    : res.status(500).send({ success: false });
};

export default deleteBook;
