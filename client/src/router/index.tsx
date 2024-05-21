import { Home } from "../pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
