import './bookshelf.scss';

const ShelfRow = ({ title, books }) => {
  return (
    <div className="shelf-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-books">
        {books.map((book, bookIndex) => (
          <p key={bookIndex}>{book.title}</p>
        ))}
      </div>
    </div>
  );
};

export { ShelfRow };
