import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";

const Search = ({
  books,
  search,
  handleSearch,
  searchBooks,
  handleshelfChange,
}) => {
  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooks !== undefined && search !== "" ? (
              searchBooks.map((book) => {
                const searchBook = books.find((b) => b.id === book.id);

                return (
                  <Book
                    key={book.id}
                    shelf={searchBook ? searchBook.shelf : "none"}
                    book={book}
                    changeBookShelf={handleshelfChange}
                  />
                );
              })
            ) : (
              <></>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Search;

Search.propTypes = {
  books: PropTypes.array,
  search: PropTypes.string,
  handleSearch: PropTypes.func,
  searchBooks: PropTypes.array,
  handleshelfChange: PropTypes.func,
};
