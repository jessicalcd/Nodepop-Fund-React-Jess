import "./layout.css";
import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;