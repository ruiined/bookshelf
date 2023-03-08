import Head from "next/head";
import { Book } from "../components/Book";

const IMG_URL =
  "https://cdn.waterstones.com/bookjackets/large/9780/2413/9780241372562.jpg";

const BOOK_TITLE = "The Trial";
const BOOK_AUTHOR = "Franz Kafka";

const ISBN = "9780805209990";

export default function Home() {
  return (
    <>
      <Head>
        <title>Boo Shelf</title>
        <meta name="description" content="hello books" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Book title={BOOK_TITLE} author={BOOK_AUTHOR} coverUrl={IMG_URL} />
        </div>
      </main>
    </>
  );
}
