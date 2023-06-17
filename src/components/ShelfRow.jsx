import { BookCard } from './BookCard';

import './bookshelf.scss';

const ShelfRow = ({ title, books }) => {
  return (
    <div className="shelf-row">
      <h2 className="row-title">{title}</h2>
      {books.length === 0 && (
        <p className="no-books">No books in this category!</p>
      )}
      <div className="row-books">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export { ShelfRow };
