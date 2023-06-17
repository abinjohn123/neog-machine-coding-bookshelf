import { useState, useContext, createContext } from 'react';
import { BOOKS as booksDB, CATEGORIES } from './Constants';

const AppContext = createContext({});

const generateBookData = (books) => {
  const categories = Object.values(CATEGORIES);
  const getRandomCategory = () => categories[Math.floor(Math.random() * 3)];

  return books.map((book) => ({ ...book, category: getRandomCategory() }));
};

const AppProvider = ({ children }) => {
  const [bookDetails, setBookDetails] = useState(generateBookData(booksDB));

  const contextValue = {
    bookDetails,
    setBookDetails,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
