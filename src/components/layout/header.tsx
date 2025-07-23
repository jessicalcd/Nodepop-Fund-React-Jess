import "./header.css";
import NodepopIcon from "../icons/Nodepop";
import AuthButton from "../../pages/auth/AuthButton";
import { Link, NavLink } from "react-router";

function Header() {

  return (
    <header className="header">
      <Link to="/">
        <div className="header-logo">
          <NodepopIcon width={32} height={32} />
        </div>
      </Link>
      <nav className="header-nav">
        <NavLink to="/adverts" className="header-link">
          Last Adverds
        </NavLink>
        <NavLink to="/adverts/new" className="header-link">
          New Adverts
        </NavLink>
        <AuthButton />
      </nav>
    </header>
  );
}

export default Header;