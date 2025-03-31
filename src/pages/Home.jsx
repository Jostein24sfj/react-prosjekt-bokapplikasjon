import { useEffect, useState } from "react";
import BookList from "../components/BookList";

export default function Home({ searchParam, selectedCategory }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = "https://gutendex.com/books?";

    if (searchParam.length > 2) {
      url += `search=${searchParam}`;
    } else if (selectedCategory) {
      url += `topic=${selectedCategory.toLowerCase()}`;
    }

    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((data) => setBooks(data.results || []))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [searchParam, selectedCategory]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-black mb-4"></h2>
      {loading && <p className="text-white">Loading Books</p>}
      {error && <p className="text-red-500">{error}</p>}
      <BookList books={books} />
    </div>
  );
}
