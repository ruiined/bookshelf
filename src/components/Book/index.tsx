import Image from "next/image";
import { Popover } from "@headlessui/react";
import { Book } from "@prisma/client";

const Book = ({ title, coverImageUrl }: Partial<Book>): JSX.Element => {
  return (
    <Popover className="relative">
      <Popover.Button className="focus:outline-none">
        <Image
          src={coverImageUrl ?? "/book-placeholder.png"}
          alt={`${title}`}
          width={140}
          height={270}
          className="rounded-xl shadow-md hover:shadow-xl transition-all hover:ring-offset-2 hover:ring-1 hover:ring-teal-500 border hover:border-purple-800 hover:border-spacing-2 p-0.5 focus-ring-0 focus:border-0"
        />
      </Popover.Button>
      <Popover.Panel className="absolute z-10">
        <h2>{title}</h2>
        <h3 className="italic"></h3>
      </Popover.Panel>
    </Popover>
  );
};

export default Book;
