import { updateBookInDb } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

const favouriteBook = async (req: NextApiRequest, res: NextApiResponse) => {
  const { isbn, fav } = req.query;

  const isFavourite = fav === "true";

  const isSuccessful = await updateBookInDb(isbn?.toString() ?? "", {
    isFavourite,
  });

  isSuccessful
    ? res.status(200).json({ message: "success" })
    : res.status(500).send({ success: false });
};

export default favouriteBook;
