import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CarDetailsPage = lazy(() =>
  import("./pages/CarDetailsPage/CarDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Завантаження сторінки...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster />
    </Layout>
  );
}

export default App;
