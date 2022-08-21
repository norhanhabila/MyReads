import React from "react";
import Book from "./Book";
const BookShelf = ({ id, books, changeBookShelf }) => {
  //Currently Reading  Read

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{id}</h2>

      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) =>
            book.shelf === id ? (
              <li key={book.title}>
                <Book book={book} changeBookShelf={changeBookShelf} />
              </li>
            ) : null
          )}
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;
