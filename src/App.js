import React from "react";
import TitleBar from "./Components/TitleBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AdminLogin from "./Screens/AdminLogin";
import CustomerLogin from "./Screens/CustomerLogin";
import AdminDashboard from "./AdminFiles/AdminDashboard";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <TitleBar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/adminLogin" element={<AdminLogin />} />
          <Route exact path="/customerLogin" element={<CustomerLogin />} />
          <Route exact path="/adminDashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
