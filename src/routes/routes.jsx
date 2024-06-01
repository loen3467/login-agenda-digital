import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Login } from "../pages/Login";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
