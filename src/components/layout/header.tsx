import { useContext } from "react";
import { logout } from "../../pages/auth/service";
import Button from "../button";
import { AuthContext } from "../../pages/auth/context";

function Header() {
  const { isLogged, onLogout } = useContext(AuthContext);
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header>
      <div></div>
      <nav>
        {isLogged ? (
          <Button $variant="secondary" onClick={handleLogoutClick}>
            Logout
          </Button>
        ) : (
          <Button $variant="primary">Login</Button>
        )}
      </nav>
    </header>
  );
}

export default Header;