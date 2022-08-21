import React from "react";
import { Link } from "react-router-dom";

const Search = ({
  search,
  handleSearch,
  searchBooks,
  Book,
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
                return <Book book={book} changeBookShelf={handleshelfChange} />;
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
