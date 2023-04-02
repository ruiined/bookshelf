import type { Author, Book as BookModel, Category } from "@prisma/client";

export type Book = BookModel & { authors: Author[]; categories: Category[] };

export interface BookData {
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

type OmitId<T extends object> = T & {
  id?: never;
};

export type FormattedBookData = OmitId<
  Partial<Omit<Book, "authors" | "categories">>
> & {
  authors: {
    create: {
      name: string;
    }[];
  };
  categories: {
    create: {
      name: string;
    }[];
  };
};
