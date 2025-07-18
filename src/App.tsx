import LoginPage from "./pages/auth/loginPage";
import AdvertsPage from "./pages/adverts/AdvertsPage";
import { useAuth } from "./pages/auth/context";
import NewAdvertPage from "./pages/adverts/NewAdvertPage";


function App() {
  const { isLogged } = useAuth();
  return isLogged ? (
    <>
      <AdvertsPage />
      <NewAdvertPage />
    </>
  ) : (
    <LoginPage />
  );
}

export default App;
