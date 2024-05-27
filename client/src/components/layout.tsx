import { ReactNode } from "react";
import { Header } from "./header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-6">{children}</main>
    </div>
  );
};
