import Head from "next/head";
import App from "@/components";
import { PrismaClient } from "@prisma/client";
import type { Book } from "@/components/BookCover/types";

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const books = await prisma.book.findMany({
    include: {
      authors: true,
      categories: true,
    },
  });
  return {
    props: {
      books: JSON.parse(JSON.stringify(books)),
    },
  };
}

export default function Home({ books }: { books: Book[] }) {
  return (
    <>
      <Head>
        <title>Boooo Shelf</title>
        <meta name="description" content="hello books" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App books={books} />
    </>
  );
}
