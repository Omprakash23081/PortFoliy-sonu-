import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [window, setWindow] = useState("Dashboard");

  return (
    <AppContext.Provider
      value={{
        window,
        setWindow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
