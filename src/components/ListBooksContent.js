import React from "react";
import BookShelf from "./BookShelf";
const ListBooksContent = ({ books, changeBookShelf }) => {
  return (
    <div className="list-books-content">
      <BookShelf
        id="currentlyReading"
        books={books}
        changeBookShelf={changeBookShelf}
      />
      <BookShelf
        id="wantToRead"
        books={books}
        changeBookShelf={changeBookShelf}
      />
      <BookShelf id="read" books={books} changeBookShelf={changeBookShelf} />
    </div>
  );
};
export default ListBooksContent;
