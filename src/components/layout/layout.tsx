import "./layout.css";
import type { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

function Layout({ title, children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        <h2 className="layout-title">{title}</h2>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;