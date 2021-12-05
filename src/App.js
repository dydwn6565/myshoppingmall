import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Aora from "./components/terms/Aora";
import Aous from "./components/terms/Aous";
import Aypi from "./components/terms/Aypi";
import Tog from "./components/terms/Tog";
import FindIdPw from "./components/FindIdPw";
import MyPage from "./components/mypage/MyPage";
import RecentlyCheckedPage from "./components/mypage/RecentlyCheckedPage";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signin/aora" element={<Aora />} />
          <Route path="/signin/aous" element={<Aous />} />
          <Route path="/signin/aypi" element={<Aypi />} />
          <Route path="/signin/tog" element={<Tog />} />
          <Route path="/findIdPw" element={<FindIdPw />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/recentlyChecked" element={<RecentlyCheckedPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
