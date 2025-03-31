import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookCard() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://gutendex.com/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book)
    return <p className="text-center text-gray-700 text-lg">Laster inn...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-gray-700 p-6 rounded-lg shadow-lg border">
      {book.formats["image/jpeg"] && (
        <img
          src={book.formats["image/jpeg"]}
          alt={book.title}
          className="w-full h-80 object-cover rounded-lg shadow-md mb-4"
        />
      )}
      <h1 className="text-2xl text-white mb-4">{book.title}</h1>
      <p className="text-white mb-2">
        <strong className="text-white">Author(s):</strong>{" "}
        {book.authors.map((a) => a.name).join(", ")}
      </p>
      <p className="text-white mb-2">
        <strong className="text-white">Summaries:</strong>{" "}
        {book.summaries.join(", ")}
      </p>
      <p className="text-white mb-4">
        <strong className="text-white">Downloads:</strong> {book.download_count}
      </p>
    </div>
  );
}
