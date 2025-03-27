import { useEffect, useState } from "react";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://gutendex.com/books/");
      if (!response.ok) {
        throw new Error(`HTTP error. Status ${response.status}`);
      }
      const result = await response.json();
      setBooks(result.results); // Corrected access to books array
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Books List</h1>
      <div className="booksBody">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        <ul>
          {books.map((book) => (
            <div className="bookCards">
              <li key={book.id}>
                <h3>{book.title}</h3>
                <p>
                  <strong>Author:</strong>{" "}
                  {book.authors.map((author) => author.name).join(", ")}
                </p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
