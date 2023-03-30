// App -> Page
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage.jsx";
import AchievePage from "./pages/AchievePage/AchievePage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";

// 定义路由
// BrowserRouter -> Routes -> Route
const router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/films/" element={<MainPage />}></Route>
      <Route path="/films/achieve" element={<AchievePage />}></Route>
      <Route path="/films/about" element={<AboutPage />}></Route>
    </Routes>
  </BrowserRouter>
);

export default router;
