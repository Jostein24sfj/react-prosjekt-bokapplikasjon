import BookItem from "./BookItem";

export default function BookList({ books }) {
  if (!books || books.length === 0) {
    return <p className="text-gray-300 text-center">Books Not Found!</p>;
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
}
