// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <nav className="headerButtons">
          <button className="headerButton" style={{ padding: "8px" }}>
            Home
          </button>
          <button className="headerButton" style={{ padding: "8px" }}>
            Category
          </button>
          <button className="headerButton" style={{ padding: "8px" }}>
            Favorites
          </button>
        </nav>
      </div>
    </header>
  );
}
