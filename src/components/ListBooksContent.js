import React from "react";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

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

ListBooksContent.propTypes = {
  books: PropTypes.array,
  changeBookShelf: PropTypes.func,
};
