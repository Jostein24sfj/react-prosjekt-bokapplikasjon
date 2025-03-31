import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import BookCard from "./pages/BookCard";

function App() {
  const [searchParam, setSearchParam] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Router>
      <Header
        searchParam={searchParam}
        setSearchParam={setSearchParam}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchParam={searchParam}
              selectedCategory={selectedCategory}
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/book/:id" element={<BookCard />} />
      </Routes>
    </Router>
  );
}

export default App;
