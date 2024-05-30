import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { ReactQueryProvider } from "./react-query-provider";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ReactQueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
