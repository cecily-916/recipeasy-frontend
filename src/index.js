import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as ServiceWorker from "./service-worker-registration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  UserLogin,
  Home,
  CurrentRecipe,
  Profile,
  UserSignUp,
  CurrentCollection,
  RecipeWalkthrough,
  PasswordReset,
  PublicHome,
  LoginNavigation,
  NewRecipe,
} from "./components/main-pages";
import Userfront from "@userfront/react";

function Routing() {
  if (!Userfront.accessToken()) {
    return (
      <Router>
        <LoginNavigation />
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignUp />} />
          <Route path="/reset" element={<PasswordReset />} />
        </Routes>
      </Router>
    );
  } else {
    const userInfo = JSON.stringify(Userfront.user, null, 2);

    return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="recipe/:recipeID" element={<CurrentRecipe />} />
          <Route
            path="collection/:collectionID"
            element={<CurrentCollection />}
          />
          <Route
            path="/recipe/:recipeID/steps"
            element={<RecipeWalkthrough />}
          />
          <Route path="home/new_recipe" element={<NewRecipe />} />
          <Route path="home/profile" element={<Profile />} />
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
