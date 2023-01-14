import Main from "./components/Main";
import { ToastContainer } from "react-toastify";
import Join from "./components/auth/Join/Join";
import NoticeWrite from "./components/Notice/NoticeWrite/NoticeWrite";

function App() {
  return (
    <>
      <NoticeWrite />
      <Join />
    </>
  );
}

export default App;
