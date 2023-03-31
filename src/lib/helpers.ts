import { BookData } from "@/lib/types";
import { Author, Category, Book } from "@prisma/client";

export type DbBookData = Partial<Book> & {
  authors: {
    create: Partial<Author>[];
  };
  categories: {
    create: Partial<Category>[];
  };
};

export const transformBookData = (bookData: BookData) => {
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
