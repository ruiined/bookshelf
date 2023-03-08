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
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </label>
      <button type="submit">Add a book to your library</button>
    </form>
  );
};

export default AddBook;
