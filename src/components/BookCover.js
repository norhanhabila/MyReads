import React from "react";
import PropTypes from "prop-types";
const BookCover = ({ book }) => {
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${book.imageLinks.thumbnail})`,
      }}
    ></div>
  );
};
export default BookCover;
BookCover.propTypes = {
  book: PropTypes.object,
};
