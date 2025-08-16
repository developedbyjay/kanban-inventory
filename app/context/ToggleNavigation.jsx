"use client";

import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [expanded, setExpanded] = useState(false);

  const toggleNavigation = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <NavigationContext.Provider
      value={{ expanded, toggleNavigation, setExpanded }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
