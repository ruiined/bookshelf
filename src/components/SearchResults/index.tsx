import { Dialog } from "@headlessui/react";
import Close from "@/assets/svgs/close.svg";

const SearchResults = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
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
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
            <div className="fixed right-3 top-3">
              <Close
                className="fill-slate-300 drop-shadow-lg transition-all cursor-pointer hover:fill-slate-500"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Search
            </Dialog.Title>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default SearchResults;
