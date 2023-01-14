import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "../auth/Join/Join";
import Login from "../auth/Login/Login";
import NoticeWrite from "../Notice/NoticeWrite/NoticeWrite";
import MyPage from "../MyPage/MyPage";
import Main from "../Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
