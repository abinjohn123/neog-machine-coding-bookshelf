import { useAppContext } from '../AppProvider';
import { CATEGORIES } from '../Constants';

export const BookCard = ({ book }) => {
  const { author, imageLink, title } = book;
  const { bookDetails, setBookDetails } = useAppContext();

  return (
    <div className="book-card">
      <div className="img-container">
        <img src={imageLink} alt={title} />
      </div>
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <select className="category-control" name="category">
        {/* <option value="currently_reading">Currently reading</option>
        <option value="want_to_read">Want to read</option>
        <option value="read">Read</option> */}
      </select>
    </div>
  );
};
