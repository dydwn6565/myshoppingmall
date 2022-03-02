import "./App.css";
import { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Aora from "./components/terms/Aora";
import Aous from "./components/terms/Aous";
import Aypi from "./components/terms/Aypi";
import Tog from "./components/terms/Tog";
import ResetPw from "./components/ResetPw";
import MyPage from "./components/mypage/MyPage";
import RecentlyCheckedPage from "./components/mypage/RecentlyCheckedPage";
// import Cart from "./components/Cart";
import TractMyItem from "./components/TractMyItem";
import Contact from "./components/Contact";
import CartPage from "./components/CartPage";
import {
  ItemContext,
  RankContext,
  UserContext,
  SelectedItemContext,
} from "./Context";
import DetailPage from "./components/DetailPage";

import OrderPage from "./components/OrderPage";
import ConfirmPage from "./components/ConfirmPage";
import SearchedItemPage from "./components/SearchedItemPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KWFQPG6LrFQPHnXH7WOTGL81dl0Xy6UheSB0SzaktLPmviFLlb4AFCPK6wB97i4jQZPc4VOO3Fl9CSothI5WYz9003qUxR8AV"
);
function App() {
  const [user, setUser] = useState({});
  const [rank, setRank] = useState({});
  const [item, setItem] = useState("");
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
                <Elements stripe={stripePromise}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin/aora" element={<Aora />} />
                    <Route path="/signin/aous" element={<Aous />} />
                    <Route path="/signin/aypi" element={<Aypi />} />
                    <Route path="/signin/tog" element={<Tog />} />
                    <Route path="/login/resetPw" element={<ResetPw />} />
                    <Route path="/myPage" element={<MyPage />} />

                    <Route path="/order" element={<OrderPage />} />

                    <Route path="/confirm" element={<ConfirmPage />} />
                    <Route
                      path="/recentlyChecked"
                      element={<RecentlyCheckedPage />}
                    />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="/tractMyItem" element={<TractMyItem />} />
                    <Route path="/detailpage/:id" element={<DetailPage />} />
                    <Route
                      path="/searchedItempage/:id"
                      element={<SearchedItemPage />}
                    />
                  </Routes>
                </Elements>
              </SelectedItemContext.Provider>
            </RankContext.Provider>
          </ItemContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
