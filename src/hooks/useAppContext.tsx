import * as React from "react";
import { AppContext } from "../App";

export interface IuseAppContextProps {}

export function useAppContext(props?: IuseAppContextProps) {
  const context = React.useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
}

export default useAppContext;
