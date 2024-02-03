import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Containers/Header";
import HomePage from "./Layout/HomePage";
import FavoritesPage from "./Layout/FavoritesPage";
import LoginPage from "./Layout/LoginPage";
import RegisterPage from "./Layout/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/TravelCompare/" element={<HomePage />} />
        <Route path="/TravelCompare/favorites" element={<FavoritesPage />} />
        <Route path="/TravelCompare/login" element={<LoginPage />} />
        <Route path="/TravelCompare/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
