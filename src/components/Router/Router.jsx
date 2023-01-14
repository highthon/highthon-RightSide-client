import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "../auth/Join/Join";
import Login from "../auth/Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
