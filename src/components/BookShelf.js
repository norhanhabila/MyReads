import React from "react";
import Book from "./Book";
const BookShelf = ({ shelf, books, changeBookShelf }) => {
  //Currently Reading  Read

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>

      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) =>
            book.shelf === shelf ? (
              <li key={book.id}>
                <Book
                  shelf={shelf}
                  book={book}
                  changeBookShelf={changeBookShelf}
                />
              </li>
            ) : null
          )}
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;
