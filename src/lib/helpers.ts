import { BookData, FormattedBookData } from "@/lib/types";

export const transformBookData = (bookData: BookData): FormattedBookData => {
  const book = bookData?.volumeInfo;
  return {
    title: book?.title ?? "",
    isbn: book?.industryIdentifiers[0]?.identifier ?? "",
    pageCount: book?.pageCount ?? 0,
    publishedDate: book?.publishedDate ?? "",
    description: book?.description ?? "",
    coverImageUrl: book?.imageLinks?.thumbnail ?? "",
    authors: {
      create: book?.authors?.map((author) => ({ name: author })) ?? [],
    },
    categories: {
      create: book?.categories?.map((category) => ({ name: category })) ?? [],
    },
  };
};
