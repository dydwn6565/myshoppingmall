import "./App.css";
import { useState, useMemo, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Aora from "./components/terms/Aora";
import Aous from "./components/terms/Aous";
import Aypi from "./components/terms/Aypi";
import Tog from "./components/terms/Tog";
import FindIdPw from "./components/FindIdPw";
import MyPage from "./components/mypage/MyPage";
import RecentlyCheckedPage from "./components/mypage/RecentlyCheckedPage";
import Cart from "./components/Cart";
import TractMyItem from "./components/TractMyItem";
import Contact from "./components/Contact";
import CartPage from "./components/CartPage";
import {
  ItemContext,
  RankContext,
  UserContext,
  SelectedItemContext,
} from "./Context";

function App() {
  const [user, setUser] = useState({});
  const [rank, setRank] = useState({});
  const [item, setItem] = useState({});
  const [selectedItem, setSelectedItem] = useState({});
  // const UserContext = createContext(null);
  const userInfo = useMemo(() => ({ user, setUser }), [user, setUser]);
  const rankInfo = useMemo(() => ({ rank, setRank }), [rank, setRank]);
  const itemInfo = useMemo(() => ({ item, setItem }), [item, setItem]);
  const selectedItemInfo = useMemo(
    () => ({ selectedItem, setSelectedItem }),
    [selectedItem, setSelectedItem]
  );
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={userInfo}>
          <ItemContext.Provider value={itemInfo}>
            <RankContext.Provider value={rankInfo}>
              <SelectedItemContext.Provider value={selectedItemInfo}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/signin/aora" element={<Aora />} />
                  <Route path="/signin/aous" element={<Aous />} />
                  <Route path="/signin/aypi" element={<Aypi />} />
                  <Route path="/signin/tog" element={<Tog />} />
                  <Route path="/findIdPw" element={<FindIdPw />} />
                  <Route path="/myPage" element={<MyPage />} />
                  <Route
                    path="/recentlyChecked"
                    element={<RecentlyCheckedPage />}
                  />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/contact" element={<Contact />} />

                  <Route path="/tractMyItem" element={<TractMyItem />} />
                </Routes>
              </SelectedItemContext.Provider>
            </RankContext.Provider>
          </ItemContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
