import React from "react";
// import "./css/main.css";

export default function Recipe(props) {
  const { title, ingredients, image, cuisineType } = props;
  return (
    <>
      <div className="grid">
        <div className="card">
          <p className="title">{title}</p>
          <div className="image-container">
            <img src={image} width={100} height={100} />
          </div>
          <ol>
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
          <p className="cuisine">Cuisine Type: {cuisineType}</p>
        </div>
      </div>
    </>
  );
}
