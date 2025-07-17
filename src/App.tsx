import { useState } from "react";
import LoginPage from "./pages/auth/loginPage";
import AdvertsPage from "./pages/adverts/AdvertsPage";
import { AuthContext } from "./pages/auth/context";



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

  const authValue = {
    isLogged,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {isLogged ? <AdvertsPage active /> : <LoginPage />}
    </AuthContext.Provider>
  );
}

export default App;
