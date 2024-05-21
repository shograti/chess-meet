import { Layout } from "@/components/layout";
import { Home } from "../pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};
