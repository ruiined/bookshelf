export interface BookData {
  volumeInfo: {
    title: string;
    authors: string[];
    pageCount: number;
    publishedDate: string;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    categories: string[];
    industryIdentifiers: {
      type: string;
      identifier: string;
    }[];
  };
}
