import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = ({ shelf, books, changeBookShelf }) => {
  //Currently Reading  Read

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>

      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) =>
            book.shelf === shelf ? (
              <Book
                key={book.id}
                shelf={shelf}
                book={book}
                changeBookShelf={changeBookShelf}
              />
            ) : null
          )}
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;

BookShelf.propTypes = {
  shelf: PropTypes.string,
  books: PropTypes.array,
  changeBookShelf: PropTypes.func,
};
