export default function CategorySelect({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    "Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Fantasy",
    "Morality",
    "Society",
    "Power",
    "Justice",
    "Adventure",
    "Tragedy",
    "War",
    "Philosophy",
  ];

  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="px-4 py-2 rounded-lg bg-inherit text-white"
    >
      <option value="">Velg kategori</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
