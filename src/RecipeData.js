import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Recipe from "./Recipe";

export default function RecipeData() {
  const [recipe, setRecipe] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState();
  const [query, setQuery] = useState("rice");

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
  useEffect(() => {
    getRecipe(recipeApi);
  }, [query]);

  return (
    <div className="body">
      <div className="form">
        <form type="submit" onSubmit={getUserInput}>
          <input type="text" onChange={handleChange} />
          <button type="submit">Get Recipe</button>
        </form>
      </div>
      <div>
        <p></p>
      </div>
      <div className="grid">
        {recipe.map((recipes, index) => (
          <div key={index} className="grid-card">
            <p className="label">{recipes.recipe.label}</p>
            <img src={recipes.recipe.image} className="grid-image" />
            <div className="ingredients">
              <p>Ingredients</p>
              <ol>
                {recipes.recipe.ingredients.map((ingredient) => (
                  <li>{ingredient.text}</li>
                ))}
              </ol>
            </div>

            {/* <p className="cuisine">
              Cuisine Type: {recipes.recipe.cuisineType}
            </p> */}
          </div>
          //   <ol>
          //   {ingredients.map((ingredient) => (
          //     <li>{ingredient.text}</li>
          //   ))}
          // </ol>
        ))}
      </div>
    </div>
  );
}
