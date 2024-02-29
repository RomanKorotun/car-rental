import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout.js";
const HomePage = lazy(() => import("../pages/HomePage.js"));
const CatalogPage = lazy(() => import("../pages/CatalogPage.js"));
const FavoritePage = lazy(() => import("../pages/FavoritesPage.js"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage.js"));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
