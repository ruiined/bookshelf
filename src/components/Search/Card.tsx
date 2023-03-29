import type { Book } from "@/lib/types";

const SearchResultsCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex flex-row justify-center items-center">
      {book?.title}
    </div>
  );
};

export default SearchResultsCard;
