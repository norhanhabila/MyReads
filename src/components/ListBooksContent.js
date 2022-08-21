import React from "react";
import BookShelf from "./BookShelf";
const ListBooksContent = ({ books, changeBookShelf }) => {
  return (
    <div className="list-books-content">
      <BookShelf
        shelf="currentlyReading"
        books={books}
        changeBookShelf={changeBookShelf}
      />
      <BookShelf
        shelf="wantToRead"
        books={books}
        changeBookShelf={changeBookShelf}
      />
      <BookShelf shelf="read" books={books} changeBookShelf={changeBookShelf} />
    </div>
  );
};
export default ListBooksContent;
