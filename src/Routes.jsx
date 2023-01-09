import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Error from "./pages/Error";
import About from "./pages/About";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="/about" element={<About />} />
            {/*si le chemin ne correspond à aucune autres page ci dessus, alors il affichera une page d'erreur*/}
            <Route path="*" element={<Error />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
