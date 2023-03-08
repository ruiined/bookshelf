import Book from "./Book";
import AddBook from "./AddBook";

const IMG_URL =
  "https://cdn.waterstones.com/bookjackets/large/9780/2413/9780241372562.jpg";

const BOOK_TITLE = "The Trial";
const BOOK_AUTHOR = "Franz Kafka";

const ISBN = "9780805209990";

const App = () => {
  return (
    <div>
      <AddBook />
      <Book title={BOOK_TITLE} author={BOOK_AUTHOR} coverUrl={IMG_URL} />
    </div>
  );
};

export default App;
