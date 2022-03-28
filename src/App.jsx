import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import Artists from "./components/artists";
import About from "./components/about";
import BarberShop from "./components/barber-shop";
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
          <Route path="/o-nas" element={<About />}></Route>
          <Route path="/barber-shop" element={<BarberShop />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
