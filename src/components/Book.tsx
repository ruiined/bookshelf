import Image from "next/image";
import { Popover } from "@headlessui/react";

type Book = {
  title: string;
  author: string;
  coverUrl: string;
};

export const Book = ({ title, author, coverUrl }: Book): JSX.Element => {
  return (
    <div>
      <h1>Your bookshelf</h1>
      <button>Add a book</button>
      <Popover className="relative">
        <Popover.Button>
          <Image
            src={coverUrl}
            alt={`${author} - ${title}`}
            width={170}
            height={270}
          />
        </Popover.Button>
        <Popover.Panel className="absolute z-10">
          <h2>{title}</h2>
          <h3 className="italic">{author}</h3>
        </Popover.Panel>
      </Popover>
    </div>
  );
};
