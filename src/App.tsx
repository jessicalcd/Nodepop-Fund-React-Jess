import LoginPage from "./pages/auth/loginPage";
import AdvertsPage from "./pages/adverts/AdvertsPage";
import NewAdvertPage from "./pages/adverts/NewAdvertPage";
import { Navigate, Route, Routes } from "react-router";
import Layout from "./components/layout/layout";
import RequireAuth from "./pages/auth/RequireAuth";
import AdvertPage from "./pages/adverts/AdvertPage";
import NotFoundPage from "./pages/common/NotFoundPage";



function App() {
   return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/adverts" element={<Layout />}>
        <Route index element={<AdvertsPage />} />
        <Route path=":advertId" element={<AdvertPage />} /> 
        <Route path="new" element={<RequireAuth><NewAdvertPage /></RequireAuth>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
