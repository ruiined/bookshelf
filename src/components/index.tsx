import Book from "./Book";
import AddBook from "./AddBook";
import Image from "next/image";

const IMG_URL =
  "https://cdn.waterstones.com/bookjackets/large/9780/2413/9780241372562.jpg";

const BOOK_TITLE = "The Trial";
const BOOK_AUTHOR = "Franz Kafka";

const ISBN = "9780805209990";

const App = () => {
  return (
    <div>
      <div className="flex flex-row justify-center h-16">
        <Image src="/booooo.png" alt="Logo" width={64} height={64} />
        <h1 className="uppercase font-extrabold text-2xl pt-3 pl-4">
          <span className="text-teal-500">Boo</span>
          <span className="text-purple-800">shelf</span>
        </h1>
      </div>
      <AddBook />
      <Book title={BOOK_TITLE} author={BOOK_AUTHOR} coverUrl={IMG_URL} />
    </div>
  );
};

export default App;
