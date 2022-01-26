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
  About,
  Contact,
  Profile,
} from "./components";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')

  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

ServiceWorker.unregister();

reportWebVitals();
