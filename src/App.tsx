import { useState } from "react";
import LoginPage from "./pages/auth/loginPage";
import AdvertsPage from "./pages/adverts/AdvertsPage";



function App() {
  const [isLogged, setIsLogged] = useState(false);

  function handleLogin() {
    setIsLogged(true);
  }

  return isLogged ? <AdvertsPage active /> : <LoginPage onLogin={handleLogin} />;
}

export default App;
