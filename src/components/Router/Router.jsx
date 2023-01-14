import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "../auth/Join/Join";
import Login from "../auth/Login/Login";
import NoticeWrite from "../Notice/NoticeWrite/NoticeWrite";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoticeWrite />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
