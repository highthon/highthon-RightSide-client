import { Route, Routes } from "react-router-dom";
import Join from "../auth/Join/Join";
import Login from "../auth/Login/Login";
import { BrowserRouter } from "react-router-dom";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
