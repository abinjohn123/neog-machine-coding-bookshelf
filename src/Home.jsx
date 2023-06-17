import { useAppContext } from './AppProvider';
import { ShelfRow } from './components/ShelfRow';
import { CATEGORIES } from './Constants';

export const Home = () => {
  const { bookDetails } = useAppContext();

  return (
    <>
      <ShelfRow
        title="Currently Reading"
        books={bookDetails.filter(
          ({ category }) => category === CATEGORIES.CURRENTLY_READING
        )}
      />
      <ShelfRow
        title="Want to read"
        books={bookDetails.filter(
          ({ category }) => category === CATEGORIES.WANT_TO_READ
        )}
      />
      <ShelfRow
        title="Read"
        books={bookDetails.filter(
          ({ category }) => category === CATEGORIES.READ
        )}
      />
    </>
  );
};
