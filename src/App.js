import { useState } from "react";
import Header from "./Header";
import RecipeData from "./RecipeData";
import "./scss/main.scss";

function App() {
  return (
    <div>
      <Header />
      <RecipeData />
    </div>
  );
}

export default App;
