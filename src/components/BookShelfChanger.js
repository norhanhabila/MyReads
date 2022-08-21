import React from "react";
import PropTypes from "prop-types";

const BookShelfChanger = ({ shelf, book, changeBookShelf }) => {
  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={shelf ? shelf : "none"}
        onChange={(event) => {
          changeBookShelf(event, book);
        }}
      >
        <option value="" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
export default BookShelfChanger;

BookShelfChanger.propTypes = {
  shelf: PropTypes.string,
  book: PropTypes.object,
  changeBookShelf: PropTypes.func,
};
