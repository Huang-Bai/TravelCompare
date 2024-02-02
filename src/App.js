import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Containers/Header";
import HomePage from "./Layout/HomePage";
import FavoritesPage from "./Layout/FavoritesPage";
import AuthPage from "./Layout/AuthPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/TravelCompare/" element={<HomePage />} />
        <Route path="/TravelCompare/favorites" element={<FavoritesPage />} />
        <Route path="/TravelCompare/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
