import { useAppContext } from '../AppProvider';
import { CATEGORIES_DROPDOWN_OPTIONS } from '../Constants';

export const BookCard = ({ book }) => {
  const { author, imageLink, title } = book;
  const { setBookDetails } = useAppContext();

  const generateCategoriesOptions = () =>
    CATEGORIES_DROPDOWN_OPTIONS.map(({ label, value }, index) => (
      <option value={value} key={index}>
        {label}
      </option>
    ));

  const onCategoryChange = (e) => {
    console.log(e.target.value);
    setBookDetails((books) =>
      books.map((eachBook) => {
        if (eachBook.id === book.id)
          return {
            ...eachBook,
            category: e.target.value,
          };
        else return eachBook;
      })
    );
  };

  return (
    <div className="book-card">
      <div className="img-container">
        <img src={imageLink} alt={title} />
      </div>
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <select
        className="category-control"
        name="category"
        defaultValue={book.category}
        onChange={onCategoryChange}
      >
        {generateCategoriesOptions()}
      </select>
    </div>
  );
};
