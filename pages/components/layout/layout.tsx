import { FC } from "react";
import * as React from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
