import { useEffect, useState } from "react";
import BookList from "../components/BookList";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="p-6">
      {favorites.length === 0 ? (
        <p className="text-gray-800">No favorites!</p>
      ) : (
        <BookList books={favorites} />
      )}
    </div>
  );
}
