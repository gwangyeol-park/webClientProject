import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView.jsx";
import LoginView from "./views/LoginView.jsx";
import SignupView from "./views/SignupView.jsx";
import LoginHomeView from "./views/LoginHomeView.jsx";
import MypageView from "./views/MypageView.jsx";
import ItemCreateView from "./views/ItemCreateView.jsx";

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView/>}/>
          <Route path="/home" element={<LoginHomeView/>}/>
          <Route path="/myPage" element={<MypageView/>}/>
          <Route path="items" element={<ItemCreateView/>}/>
          <Route path="/test" element={<LoginHomeView/>}/>
          <Route path="/login" element={<LoginView/>}/>
          <Route path="/signup" element={<SignupView/>}/>
        </Routes>
      </BrowserRouter>
    );
};

export default App;