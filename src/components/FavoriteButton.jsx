import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";

export default function FavoriteButton({ book }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((fav) => fav.id === book.id));
  }, [book.id]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.id !== book.id);
    } else {
      favorites.push(book);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`px-3 py-1 rounded-md font-medium text-sm flex  ${
        isFavorite ? " text-white" : " text-gray-800"
      }`}
    >
      {isFavorite ? (
        <FaStar style={{ color: "yellow", width: "24px", height: "24px" }} />
      ) : (
        <IoIosStarOutline
          style={{ color: "yellow", width: "24px", height: "24px" }}
        />
      )}
    </button>
  );
}
