
import "./header.css";
import NodepopIcon from "../icons/Nodepop";
import AuthButton from "../../pages/auth/AuthButton";

function Header() {

  return (
    <header className="header">
      <div className="header-logo">
        <NodepopIcon width={32} height={32} />
      </div>
      <nav className="header-nav">
        <AuthButton />
      </nav>
    </header>
  );
}

export default Header;