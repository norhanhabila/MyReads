import "./App.css";
import { useEffect, useState, useCallback } from "react";
import ListBooksTitle from "./components/ListBooksTitle";
import ListBooksContent from "./components/ListBooksContent";
import * as BooksAPI from "./BooksAPI";
import { Link, Route, Routes } from "react-router-dom";
import Book from "./components/Book";
import Search from "./components/Search";
function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  console.log(books);
  const handleshelfChange = useCallback(
    async (e, selectBook) => {
      const { value } = e.target;
      await BooksAPI.update(selectBook, value);
      if (selectBook.shelf) {
        const updatedBooks = books.map((book) => {
          return book.id === selectBook.id
            ? { ...book, shelf: value }
            : { ...book };
        });
        setBooks(updatedBooks);
      } else {
        const searchBook = searchBooks.find(
          (book) => book.id === selectBook.id
        );
        setBooks((book) => {
          return [{ ...searchBook, shelf: value }, ...book].map((book) => {
            return book.id === selectBook.id
              ? { ...book, shelf: value }
              : { ...book };
          });
        });
      }
    },
    [books, searchBooks]
  );
  const handleSearch = useCallback((e) => {
    const { value } = e.target;
    setSearch(value);
    if (value !== "") {
      BooksAPI.search(value).then((res) => {
        if (!res?.error) setSearchBooks(res);
        else setSearchBooks(res.items);
      });
    }
  }, []);
  return (
    <Routes>
      <Route
        path="/search"
        element={
          <Search
            books={books}
            search={search}
            handleSearch={handleSearch}
            searchBooks={searchBooks}
            Book={Book}
            handleshelfChange={handleshelfChange}
          />
        }
      />
      <Route
        path="/"
        element={
          <div className="list-books">
            <ListBooksTitle />
            <ListBooksContent
              books={books}
              changeBookShelf={handleshelfChange}
            />
            <div className="open-search">
              <Link to="search">Add a book</Link>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
