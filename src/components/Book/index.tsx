import Image from "next/image";
import { Popover } from "@headlessui/react";

type Book = {
  title: string;
  author: string;
  coverUrl: string;
  isbn?: string;
};

const Book = ({ title, author, coverUrl, isbn }: Book): JSX.Element => {
  return (
    <Popover className="relative">
      <Popover.Button>
        <Image
          src={coverUrl}
          alt={`${author} - ${title}`}
          width={140}
          height={270}
          className="rounded-xl shadow-md hover:shadow-xl"
        />
      </Popover.Button>
      <Popover.Panel className="absolute z-10">
        <h2>{title}</h2>
        <h3 className="italic">{author}</h3>
      </Popover.Panel>
    </Popover>
  );
};

export default Book;
