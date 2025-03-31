import { Link } from "react-router-dom";
import CategorySelect from "./CategorySelect";
import { FaStar } from "react-icons/fa6";
import "./header.css";

export default function Header({
  searchParam,
  setSearchParam,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <header>
      <h1 className="headerText">
        <Link to="/">Darkmode Gutendex</Link>
      </h1>

      <div className="flex w-full md:w-auto md:mt-0 ">
        <input
          type="text"
          placeholder="Search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className="placeholder:text-center px-2 md:w-64"
        />
        <CategorySelect
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <nav className="favorites">
        <Link to="/favorites">
          <FaStar
            style={{
              color: "yellow",
              width: "30px",
              height: "30px",
            }}
          />
        </Link>
      </nav>
    </header>
  );
}
