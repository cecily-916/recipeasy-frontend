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
  UserLogin,
  Home,
  CurrentRecipe,
  Profile,
  UserSignUp,
  RecipeWalkthrough,
} from "./components/main-pages";
import NewRecipeForm from "./components/new-recipe-input/add-recipe";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')

  <Router>
    <Navigation />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/recipe/:recipeID" element={<CurrentRecipe />} />
      <Route
        path="/recipe/:recipeID/steps/:stepID"
        element={<RecipeWalkthrough />}
      />
      <Route path="/add-recipe" element={<NewRecipeForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignUp />} />
      {/* <Route path="/reset" element={<Reset />} /> */}
    </Routes>
    {/* <Footer /> */}
  </Router>,
  document.getElementById("root")
);

ServiceWorker.unregister();

reportWebVitals();
