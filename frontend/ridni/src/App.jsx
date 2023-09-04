import React from "react";
import { Routes, Route } from "react-router-dom";
import Promo from "./pages/Promo/Promo";
import UserLogin from "./pages/Auth/Login/User/UserLogin";
import Signin from "./pages/Auth/Signin/User/UserSignin";
import ConfirmUser from "./pages/Auth/Signin/User/ConfirmUser";
import Reset from "./pages/Auth/Reset/Reset";
import ConfirmReset from "./pages/Auth/Reset/СonfirmResetForm";
import SellerLogin from "./pages/Auth/Login/Seller/SellerLogin";
import SellerSignin from "./pages/Auth/Signin/Seller/SellerSignin";
import ConfirmSeller from "./pages/Auth/Signin/Seller/ConfirmSeller";

const App = () => {g
  return (
    <Routes>
      <Route path="/" element={<Promo />}></Route>
      <Route path="/login" element={<UserLogin />}></Route>
      <Route path="/seller-login" element={<SellerLogin />}></Route>
      <Route path="/confirm-seller" element={<ConfirmSeller />}></Route>
      <Route path="/confirm" element={<ConfirmUser />}></Route>
      <Route path="/reset" element={<Reset />}></Route>
      <Route path="/confirm-reset" element={<ConfirmReset />} />
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signin-seller" element={<SellerSignin />}></Route>
    </Routes>
  );
};
export default App;
