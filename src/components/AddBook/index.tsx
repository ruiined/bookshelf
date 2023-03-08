import React, { useState } from "react";
import axios from "axios";

interface Book {
  volumeInfo: {
    title: string;
    authors: string[];
    industryIdentifiers: {
      type: string;
      identifier: string;
    }[];
  };
}

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const getBookData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}`;
    try {
      const response = await axios.get<{ items: Book[] }>(url);
      const book = response.data.items[0];
      const isbn = book.volumeInfo.industryIdentifiers[0].identifier;
      console.log({ book, isbn });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={getBookData}>
      <div className="flex justify-center my-12 space-x-6">
        <label className="block text-xs font-medium tracking-wider text-slate-500 text-center">
          Author
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            className="mt-2 px-4 py-2 rounded-full bg-white font-normal border text-slate-500 text-xs shadow-sm border-slate-100 focus:outline-none block w-36"
          />
        </label>
        <label className="block text-xs font-medium tracking-wider text-slate-500 text-center">
          Title
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="mt-2 px-4 py-2 rounded-full bg-white font-normal border text-slate-500 text-xs shadow-sm border-slate-100 focus:outline-none block w-36"
          />
        </label>
        <br />
        <button
          type="submit"
          className="rounded-full w-8 h-8 mt-6 shadow-sm border border-slate-100 hover:border-slate-200 hover:shadow-md"
        >
          🐼
        </button>
      </div>
    </form>
  );
};

export default AddBook;
