import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import appRoutes from "./router/routes";
import { Session } from "@supabase/supabase-js";
import supabase from "./supabase";
import { IAppContext } from "./ts/interfaces/context_interfaces";
export const AppContext = React.createContext<null | IAppContext>(null);

function App() {
  const [currentUser, setCurrentUser] = React.useState<Session | null>(null);
  React.useEffect(() => {
    document.body.classList.add(
      localStorage.getItem("theme")
        ? localStorage.getItem("theme")!
        : "light-theme"
    );
  }, []);
  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setCurrentUser(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setCurrentUser(session);
    });
  }, []);
  return (
    <AppContext.Provider
      value={{
        currentUser,
      }}
    >
      <Router>
        <Routes>
          {appRoutes.routes.map((route) => (
            <Route path={route.path} element={route.component} />
          ))}
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
