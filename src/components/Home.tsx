import Boo from "./Book/Cover";
import AddBook from "./Search/Form";
import Image from "next/image";
import type { Book } from "@lib/types";
import { useRefresh } from "@lib/hooks";

const App = ({ books }: { books: Book[] }) => {
  useRefresh();

  return (
    <div className="py-64 px-48">
      <div className="flex flex-row justify-center mb-8">
        <Image src="/booooo.png" alt="Logo" width={64} height={64} />
        <h1 className="uppercase font-extrabold text-2xl pt-3 pl-4">
          <span className="text-teal-500">Boo</span>
          <span className="text-purple-800">shelf</span>
        </h1>
      </div>
      <AddBook />
      {/* <div className="font-bold text-slate-200 text-3xl text-center">
        {books?.length}
      </div> */}
      <div className="container mx-auto">
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10">
          {books?.map((book) => (
            <Boo key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
