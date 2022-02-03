import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as ServiceWorker from "./service-worker-registration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  // Footer,
  Home,
  CurrentRecipe,
  Profile,
} from "./components/main-pages";
import NewRecipeForm from "./components/new-recipe-input/add-recipe";
import RecipeWalkthrough from "./components/main-pages/current_recipe/walkthrough/recipe_walkthrough";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')

  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:recipeID" element={<CurrentRecipe />} />
      <Route
        path="/recipe/:recipeID/steps/:stepID"
        element={<RecipeWalkthrough />}
      />
      <Route path="/add-recipe" element={<NewRecipeForm />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    {/* <Footer /> */}
  </Router>,
  document.getElementById("root")
);

ServiceWorker.unregister();

reportWebVitals();
