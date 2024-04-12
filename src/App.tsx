import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import appRoutes from "./router/routes";
import { Session } from "@supabase/supabase-js";
import supabase from "./supabase";
import { IAppContext } from "./ts/interfaces/context_interfaces";
import { Toaster } from "react-hot-toast";
import toastOptions from "./toasts/toastOptions";
import { EnumRefetchAction } from "./ts/enums/refetch_toast_action";
export const AppContext = React.createContext<null | IAppContext>(null);

function App() {
  const [currentUser, setCurrentUser] = React.useState<Session | null>(null);
  const [refetch, setRefetch] = React.useState<EnumRefetchAction>(EnumRefetchAction.default);
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
        refetch,
        setRefetch
      }}
    >
      <Toaster toastOptions={toastOptions} />
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
