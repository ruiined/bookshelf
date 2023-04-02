import { Dialog } from "@headlessui/react";
import Close from "@icons/close.svg";
import type { FormattedBookData } from "@lib/types";
import Card from "./Card";

const SearchResults = ({
  isOpen,
  setIsOpen,
  results,
}: {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
  results: FormattedBookData[];
}) => {
  return (
    <Dialog
      as="div"
      className="relative z-10"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-70">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-8">
            <div className="fixed right-3 top-3">
              <Close
                className="fill-slate-300 drop-shadow-lg transition-all cursor-pointer hover:fill-slate-500"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900 text-center"
            >
              Search
            </Dialog.Title>
            <div className="grid grid-cols-4 gap-4 items-stretch justify-items-center">
              {results?.map((book) => (
                <Card key={book.isbn ?? book.id} book={book} />
              ))}
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default SearchResults;
