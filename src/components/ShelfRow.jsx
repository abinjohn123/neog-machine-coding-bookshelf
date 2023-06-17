import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '../AppProvider';
import { BookCard } from './BookCard';
import './bookshelf.scss';

const ShelfRow = ({ title, books, isSearch = false }) => {
  const { bookDetails } = useAppContext();
  const navigate = useNavigate();
  const inputEl = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [shelfBooks, setShelfBooks] = useState([...books]);

  useEffect(() => {
    if (isSearch) inputEl.current.focus();
  }, []);

  useEffect(() => {
    if (isSearch) {
      if (searchQuery === '') setShelfBooks([]);
      else
        setShelfBooks(
          bookDetails.filter((book) =>
            book.title?.toLowerCase().includes(searchQuery)
          )
        );
    }
  }, [searchQuery]);

  return (
    <div className="shelf-row">
      {isSearch ? (
        <div className="search-container row-title">
          <div className="back-btn" onClick={() => navigate('/')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="back-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <input
            className="search-input"
            placeholder="eg. Oliver twist"
            ref={inputEl}
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(() =>
                e.target.value.trim() ? e.target.value : ''
              )
            }
          />
        </div>
      ) : (
        <h2 className="row-title">{title}</h2>
      )}

      {(books.length === 0 || shelfBooks.length === 0) && (
        <p className="no-books">
          {isSearch
            ? searchQuery === ''
              ? 'Type a book title in the search box'
              : 'No books found. Please try another search phrase'
            : 'No books in this category!'}
        </p>
      )}
      <div className="row-books">
        {(isSearch ? shelfBooks : books).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export { ShelfRow };
