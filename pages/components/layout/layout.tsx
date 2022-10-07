import { FC } from "react";
import * as React from "react";
import Header from "../header/header";

export interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
export default Layout;
