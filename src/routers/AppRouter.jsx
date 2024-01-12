// AppRouter

// Router Components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// stylesheet
import "../styles/App.css";

// Components
import Header from "../components/Header";
// import Footer from "../components/Footer";
// Pages
import PageHome from "../pages/PageHome";

import PageNotFound from "../pages/PageNotFound";
import PageAbout from "../pages/PageAbout";
import PageFavorites from "../pages/PageFavorites";
function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/favorites" element={<PageFavorites />} />
            {/* <Route path="/:id" exact element={<PageMovieDetails />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
