import type { FormattedBookData } from "@lib/types";
import Image from "next/image";
import Done from "@icons/done.svg";

const SearchResultsCard = ({ book }: { book: FormattedBookData }) => {
  const handleClick = () => {};
  const authors = book?.authors?.create?.map(({ name }) => name)?.join(", ");
  const categories = book?.categories?.create
    ?.map(({ name }) => name)
    ?.join(", ");

  return (
    <div className="rounded-xl w-24 bg-slate-100">
      <Image
        src={book?.coverImageUrl || "/book-placeholder.png"}
        alt={`${book?.title}`}
        width={196}
        height={128}
        className=""
      />
      <h1>{book?.title}</h1>
      <h3>{authors}</h3>
      <h3>{book?.publishedDate}</h3>
      <h3>{book?.pageCount} pages</h3>
      <h3>{categories}</h3>
      <div className="mt-2 max-h-64 overflow-y-hidden">
        <p className="text-xs text-gray-500">{book?.description}</p>
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="focus:outline-none mr-2"
      >
        <Done className="fill-gray-300 drop-shadow-sm transition-all hover:fill-gray-400" />
      </button>
    </div>
  );
};

export default SearchResultsCard;
