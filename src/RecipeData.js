import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Recipe from "./Recipe";

export default function RecipeData() {
  const [recipe, setRecipe] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState();
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipe();
  }, [query]);

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function getUserInput(e) {
    e.preventDefault();
    getRecipe(recipeApi);
    setQuery(userInput);
    setUserInput("");
  }

  let recipeApi = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=b73a44e9&app_key=a13abb8bb1c983ae4cb9725b34ac0cc9`;

  async function getRecipe(url) {
    const response = await fetch(url);
    if (response.ok) {
      response.json().then((data) => {
        setRecipe(data.hits);
        console.log(data);
      });
    } else if (response.status == 404) {
      setError("Username is incorrect");
    }
  }

  return (
    <div>
      <form type="submit" onSubmit={getUserInput}>
        <label>Name of food</label> <br />
        <input type="text" onChange={handleChange} />
        <button type="submit">Get Recipe</button>
      </form>
      <div>
        <p></p>
      </div>
      <div>
        {recipe.map((recipes, index) => (
          <Recipe
            key={index}
            title={recipes.recipe.label}
            ingredients={recipes.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}
