import React from "react";
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";

const Book = ({ shelf, book, changeBookShelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <BookCover book={book} />
        <BookShelfChanger
          shelf={shelf}
          book={book}
          changeBookShelf={changeBookShelf}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};
export default Book;
