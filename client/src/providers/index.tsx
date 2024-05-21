// src/providers/Providers.tsx
import React, { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

// Additional providers can be imported and added here

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
