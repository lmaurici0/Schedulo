import "./App.css";
import { Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home/Home";
import AuthPage from "./pages/AuthPage/AuthPage";
import Profile from "./pages/Profile/Profile";
import Reservation from "./pages/Reservation/Reservation";
import UserReservation from "./pages/UserReservation/UserReservation"

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reservas" element={<Reservation />} />
            <Route path="/minhas-reservas" element={<UserReservation />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
