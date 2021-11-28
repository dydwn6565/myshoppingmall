import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Aora from "./components/terms/Aora";
import Aous from "./components/terms/Aous";
import Aypi from "./components/terms/Aypi";
import Tog from "./components/terms/Tog";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
