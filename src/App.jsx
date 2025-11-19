import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Spinner from "./components/Spinner";
import Layout from "./components/Layout.jsx";

const HomePage = lazy(() => import("./pages/HomePage"));
const Sample = lazy(() => import("./components/Sample.jsx"));
const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sample" element={<Sample />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
