export default function SearchBar({ searchParam, setSearchParam }) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={searchParam}
      onChange={(e) => setSearchParam(e.target.value)}
      className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900 w-full md:w-64"
    />
  );
}
