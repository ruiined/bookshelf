import prisma from "client";
import { Book } from "@prisma/client";

export const createBookInDb = async (
  data: Omit<Book, "id" | "isFavourite" | "status" | "timestamp">
): Promise<boolean> => {
  try {
    await prisma.book.create({
      data,
    });
    await prisma.$disconnect();
    return true;
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};

export const deleteBookInDb = async (isbn: string): Promise<boolean> => {
  try {
    await prisma.book.delete({
      where: { isbn },
    });
    await prisma.$disconnect();
    return true;
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};

export const updateBookInDb = async (isbn: string, data: Partial<Book>) => {
  try {
    await prisma.book.update({
      where: { isbn },
      data,
    });
    await prisma.$disconnect();
    return true;
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};
