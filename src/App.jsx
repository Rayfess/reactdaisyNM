import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Spinner from "./components/Spinner";

const HomePage = lazy(() => import("./pages/HomePage"));
const Sample = lazy(() => import("./components/Sample.jsx"));
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
