import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Glasses from "../pages/Glasses";
import Ingridients from "../pages/Ingridients";
import BartenderBeginner from "../pages/BartenderBeginner";
import BartenderVeteran from "../pages/BartenderVeteran";
import CocktailDetails from "../pages/CocktailDetails";
import CocktailNotFound from "../pages/CocktailNotFound";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/glasses" element={<Glasses />} />
      <Route path="/ingridients" element={<Ingridients />} />
      <Route path="/bartender-beginner" element={<BartenderBeginner />} />
      <Route path="/bartender-veteran" element={<BartenderVeteran />} />
      <Route path="/cocktail/:cocktailId" element={<CocktailDetails />} />
      <Route path="/cocktail/*" element={<CocktailNotFound />} />
      <Route
        path="/cocktail/*"
        element={<Navigate to="/cocktail-not-found" />}
      />
      <Route path="/cocktail-not-found" element={<CocktailNotFound />} />
    </Routes>
  );
}

export default Main;
