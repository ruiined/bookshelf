import type { Author, Book as BookModel, Category } from "@prisma/client";

export type Book = BookModel & { authors: Author[]; categories: Category[] };
