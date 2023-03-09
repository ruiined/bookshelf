import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      axios.post(`/api/addBook?author=${author}&title=${title}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center my-12 space-x-4">
        <label className="block text-xs font-medium tracking-wider text-slate-500 text-center">
          Author
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            className="mt-2 px-4 py-2 rounded-full bg-white font-normal border text-slate-500 text-xs shadow-sm border-slate-100 focus:outline-none block w-28 text-center focus:border-teal-500 focus:ring-2 tracking-wide"
          />
        </label>
        <label className="block text-xs font-medium tracking-wider text-slate-500 text-center">
          Title
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="mt-2 px-4 py-2 rounded-full bg-white font-normal border text-slate-500 text-xs shadow-sm border-slate-100 focus:outline-none block w-28 text-center focus:border-purple-800 focus:ring-2 tracking-wide"
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
