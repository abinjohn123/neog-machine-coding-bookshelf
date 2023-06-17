import { useAppContext } from './AppProvider';
import { ShelfRow } from './components/ShelfRow';

export const Search = () => {
  const { bookDetails } = useAppContext();

  return (
    <>
      <ShelfRow title="Search" books={[...bookDetails]} isSearch />
    </>
  );
};
