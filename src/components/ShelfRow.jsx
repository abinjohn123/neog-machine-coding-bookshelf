import { BookCard } from './BookCard';

import './bookshelf.scss';

const ShelfRow = ({ title, books }) => {
  return (
    <div className="shelf-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-books">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export { ShelfRow };
