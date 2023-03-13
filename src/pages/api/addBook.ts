import { Book, PrismaClient } from "@prisma/client";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface BookData {
  volumeInfo: {
    title: string;
    authors: string[];
    pageCount: number;
    publishedDate: string;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    categories: string[];
    industryIdentifiers: {
      type: string;
      identifier: string;
    }[];
  };
}

const fetchBookData = async (author: string, title: string) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}`;
  try {
    const response = await axios.get<{ items: BookData[] }>(url);
    return response.data?.items?.[0];
  } catch (error) {
    console.error(error);
  }
};

const transformBookData = (bookData: BookData) => {
  const book = bookData?.volumeInfo;
  return {
    authors: {
      create: book?.authors?.map((author) => ({ name: author })) ?? [],
    },
    title: book?.title ?? "",
    isbn: book?.industryIdentifiers[0]?.identifier ?? "",
    pageCount: book?.pageCount ?? 0,
    publishedDate: book?.publishedDate ?? "",
    description: book?.description ?? "",
    coverImageUrl: book?.imageLinks?.thumbnail ?? "",
    categories: {
      create: book?.categories?.map((category) => ({ name: category })) ?? [],
    },
  };
};

const saveBook = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const { author, title } = query;
  const prisma = new PrismaClient();
  const book = await fetchBookData(author as string, title as string);
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
