import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MoviePage from "./movie_details";

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie_details/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage
