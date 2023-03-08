import Head from "next/head";
import App from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Boo Shelf</title>
        <meta name="description" content="hello books" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </>
  );
}
