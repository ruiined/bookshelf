import Image from "next/image";
import type { Book } from "@/lib/types";
import { useState } from "react";
import Modal from "./Details";

const Book = ({ book }: { book: Book }): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      className="flex rounded-xl max-w-2xs cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={book?.coverImageUrl ?? "/book-placeholder.png"}
        alt={`${book?.title}`}
        width={128}
        height={196}
        quality={100}
        className="rounded-xl shadow-md hover:shadow-xl transition-all hover:ring-offset-2 hover:ring-1 hover:ring-teal-500 border hover:border-purple-800 hover:border-spacing-2 p-0.5 focus-ring-0 focus:border-0 hover:scale-125 object-cover"
      />
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} book={book} />
    </div>
  );
};

export default Book;
