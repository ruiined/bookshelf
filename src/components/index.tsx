import Boo from "./Book";
import AddBook from "./AddBook";
import Image from "next/image";
import { Book } from "@prisma/client";

const App = ({ books }: { books: Book[] }) => {
  return (
    <div className="py-64 px-48">
      <div className="flex flex-row justify-center h-16 mb-8">
        <Image src="/booooo.png" alt="Logo" width={64} height={64} />
        <h1 className="uppercase font-extrabold text-2xl pt-3 pl-4">
          <span className="text-teal-500">Boo</span>
          <span className="text-purple-800">shelf</span>
        </h1>
      </div>
      <AddBook />
      <div className="flex space-x-10 py-10">
        {books?.map((book) => (
          <Boo
            key={book.id}
            title={book?.title}
            coverImageUrl={book?.coverImageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
