import { Dialog } from "@headlessui/react";
import type { Book } from "@/components/Book/types";
import Image from "next/image";
import axios from "axios";
import router from "next/router";
import Delete from "@/assets/svgs/delete.svg";
import HeartFilled from "@/assets/svgs/heart-filled.svg";
import HeartEmpty from "@/assets/svgs/heart-empty.svg";
import Close from "@/assets/svgs/close.svg";

type Modal = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  book: Book;
};

const Modal = ({ isOpen, setIsOpen, book }: Modal) => {
  const refreshData = () => {
    router.replace(router.asPath);
  };
  const closeModal = () => setIsOpen(false);
  const authors = book?.authors?.map(({ name }) => name)?.join(", ");
  const categories = book?.categories?.map(({ name }) => name)?.join(", ");

  const handleFavourite = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        `/api/favourite?isbn=${book?.isbn}&fav=${!book?.isFavourite}`
      );
      refreshData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.post(`/api/delete?isbn=${book?.isbn}`);
      refreshData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog
      as="div"
      className="relative z-10"
      open={isOpen}
      onClose={closeModal}
    >
      <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-70">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
            <Image
              src={book?.coverImageUrl ?? "/book-placeholder.png"}
              alt={`${book?.title}`}
              width={1000}
              height={1000}
              quality={100}
              className="absolute w-full h-full object-cover blur-md"
            />
            <div className="fixed right-3 top-3">
              <Close
                className="fill-slate-300 drop-shadow-lg transition-all cursor-pointer hover:fill-slate-500"
                onClick={closeModal}
              />
            </div>
            <div className="m-20 p-6 bg-white backdrop-grayscale rounded-2xl shadow-2xl">
              {book?.title && (
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {book?.title}
                </Dialog.Title>
              )}
              <h3>{authors}</h3>
              <h3>{book?.publishedDate}</h3>
              <h3>{book?.pageCount} pages</h3>
              <h3>{categories}</h3>
              <div className="mt-2 max-h-64 overflow-y-hidden">
                <p className="text-sm text-gray-500">{book?.description}</p>
              </div>
              <div className="flex w-full justify-between mt-5">
                <button
                  type="button"
                  onClick={handleFavourite}
                  className="focus:outline-none"
                >
                  {book?.isFavourite ? (
                    <HeartFilled className="fill-red-400 drop-shadow-sm transition-all translate-y-1 hover:translate-y-0.5 hover:fill-red-500 mt-0.5" />
                  ) : (
                    <HeartEmpty className="fill-red-400 drop-shadow-sm transition-all translate-y-1 hover:translate-y-0.5 hover:fill-red-500 mt-0.5" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="focus:outline-none"
                >
                  <Delete className="fill-gray-300 drop-shadow-sm transition-all translate-y-1 hover:translate-y-0.5 hover:fill-gray-400" />
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
