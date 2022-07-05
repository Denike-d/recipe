import { useState } from "react";
import Header from "./Header";
import RecipeData from "./RecipeData";
import "./scss/main.scss";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <RecipeData />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
