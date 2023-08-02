import React from "react";
import TitleBar from "./Components/TitleBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AdminLogin from "./Screens/AdminLogin";
import CustomerLogin from "./Screens/CustomerLogin";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark">
        <TitleBar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/adminLogin" element={<AdminLogin />} />
          <Route exact path="/customerLogin" element={<CustomerLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
