import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import appRoutes from "./router/routes";

function App() {
  React.useEffect(() => {
    document.body.classList.add(
      localStorage.getItem("theme")
        ? localStorage.getItem("theme")!
        : "light-theme"
    );
  }, []);
  return (
    <Router>
      <Routes>
        {appRoutes.routes.map((route) => (
          <Route path={route.path} element={route.component} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
