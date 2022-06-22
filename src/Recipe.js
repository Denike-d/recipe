import React from "react";

export default function Recipe(props) {
  const { title, ingredients, image } = props;
  return (
    <div>
      <p>{title}</p>
      <img src={image} width={100} height={100} />
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
}
