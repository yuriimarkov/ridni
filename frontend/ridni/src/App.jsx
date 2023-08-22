import React from "react";
import { Routes,Route } from "react-router-dom";
import Promo from "./pages/Promo/Promo";
import Login from "./pages/Auth/Login/Login";
import Signin from "./pages/Auth/Signin/Signin";
import Activited from "./pages/Auth/Signin/Activited";
import Reset from "./pages/Auth/Reset/Reset";
import ResetForm2 from "./pages/Auth/Reset/ResetForm2";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Promo />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/activited' element={<Activited />}></Route>
      <Route path='/reset' element={<Reset />}></Route>
      <Route path='/reset2' element={<ResetForm2 />}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
    </Routes>
  );
};
export default App;
