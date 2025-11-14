import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Spinner from "./components/Spinner";

const HomePage = lazy(() => import("./pages/HomePage"));
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
