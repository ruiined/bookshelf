import axios from "axios";
import { BookData } from "@lib/types";

const GOOGLE_URL = "https://www.googleapis.com/books/v1/volumes?q=";

export const fetchBookByISBN = async (isbn: string) => {
  const url = `${GOOGLE_URL}isbn:${isbn}`;

  try {
    const response = await axios.get<{ items: BookData[] }>(url);
    return response.data?.items?.[0];
  } catch (error) {
    console.error(error);
  }
};

export const fetchBookByTitleAndAuthor = async (
  author: string,
  title: string
) => {
  const url = `${GOOGLE_URL}intitle:${title}+inauthor:${author}`;

  try {
    const response = await axios.get<{ items: BookData[] }>(url);
    return response.data?.items?.[0];
  } catch (error) {
    console.error(error);
  }
};

export const fetchBooksByTitleAndAuthor = async (
  author: string,
  title: string
) => {
  const url = `${GOOGLE_URL}intitle:${title}+inauthor:${author}`;

  try {
    const response = await axios.get<{ items: BookData[] }>(url);
    return response.data?.items?.slice(0, 8);
  } catch (error) {
    console.error(error);
  }
};
