import React, { useEffect, useState } from "react";
import Recipe from "./recipe";
import "./App.css";

const App = () => {
  const APP_ID = "ccad1159";
  const APP_KEY = "e9dc99f0ee0ac9e8501957d60b1f0fb3";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [length, setLength] = useState(0);

  useEffect(() => {
    getRecipes();
    setLength();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    setLength(data.hits.length);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="header-content">
            <div className="branding">
              Recipe <span className="coloured">Search</span>
            </div>
            <form onSubmit={getSearch} className="search-form">
              <input
                className="search-bar"
                type="text"
                value={search}
                onChange={updateSearch}
              />
              <button className="search-button" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </header>
      <div className="recipes">
        <div className="container">
          <h2 className="results">
            {length} results for {query}.
          </h2>
          <div className="recipes-content">
            {recipes.map(recipe => (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                label={recipe.recipe.dietLabels[0]}
                image={recipe.recipe.image}
                // ingredients={recipe.recipe.ingredientLines}
                url={recipe.recipe.url}
              />

              // yields={recipe.recipe.yield}
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
