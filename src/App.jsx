import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import Artists from "./components/artists";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <div>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/artysci" element={<Artists />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
