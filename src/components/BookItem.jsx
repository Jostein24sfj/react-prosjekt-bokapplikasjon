import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

export default function BookItem({ book }) {
  if (!book) return null;

  return (
    <li className="bg-gray-600 shadow-xl rounded-md p-4 flex justify-between">
      <Link
        to={`/book/${book.id}`}
        className="text-lg font-semibold text-white"
      >
        <p>{book.title}</p>
        <p className="text-gray-300">
          {book.authors.map((a) => a.name).join(", ")}
        </p>
      </Link>
      <FavoriteButton book={book} />
    </li>
  );
}
