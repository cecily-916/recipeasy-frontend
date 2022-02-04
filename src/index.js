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
  PasswordReset,
  LoginNavigation,
} from "./components/main-pages";
import NewRecipeForm from "./components/new-recipe-input/add-recipe";
import Userfront from "@userfront/react";

function Routing() {
  if (!Userfront.accessToken()) {
    return (
      <Router>
        <LoginNavigation />
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignUp />} />
          <Route path="/reset" element={<PasswordReset />} />
        </Routes>
      </Router>
    );
  } else {
    // const userData = JSON.stringify(Userfront.user, null, 2);
    return (
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
      </Router>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);

ServiceWorker.unregister();

reportWebVitals();
