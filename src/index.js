import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as ServiceWorker from "./service-worker-registration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  CurrentRecipe,
  Contact,
  Profile,
} from "./components/main-pages";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')

  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<CurrentRecipe />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

ServiceWorker.unregister();

reportWebVitals();
