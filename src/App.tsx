import { useState } from "react";
import LoginPage from "./pages/auth/loginPage";
import AdvertsPage from "./pages/adverts/AdvertsPage";



interface AppProps {
  defaultIsLogged: boolean;
}

function App({ defaultIsLogged }: AppProps) {
  const [isLogged, setIsLogged] = useState(defaultIsLogged);

  function handleLogin() {
    setIsLogged(true);
  }

    function handleLogout() {
    setIsLogged(false);
  }

  return isLogged ? (
    <AdvertsPage active onLogout={handleLogout} />
  ) : (
    <LoginPage onLogin={handleLogin} />
  );
}

export default App;
