import React from "react";
import TitleBar from "./Components/TitleBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AdminLogin from "./Screens/AdminLogin";
import CustomerLogin from "./Screens/CustomerLogin";
import AdminDashboard from "./AdminFiles/AdminDashboard";
import Footer from "./Components/Footer";
import CreateWhat from "./AdminFiles/CreateWhat";
import NewBuilding from "./AdminFiles/NewBuilding";
import NewCustomer from "./AdminFiles/NewCustomer";

function App() {
  const adminLoggedIn = () => {
    if (localStorage.getItem("adminAuthToken")) return true;
    else return false;
  };
  return (
    <BrowserRouter>
      <div style={{ marginTop: "8rem", marginBottom: "6rem" }}>
        <TitleBar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/adminLogin" element={<AdminLogin />} />
          <Route exact path="/customerLogin" element={<CustomerLogin />} />
          {/* ADMIN ROUTES */}
          <Route
            exact
            path="/adminDashboard"
            element={adminLoggedIn ? <AdminDashboard /> : <HomeScreen />}
          />
          <Route
            exact
            path="/adminDashboard/createWhat"
            element={adminLoggedIn ? <CreateWhat /> : <HomeScreen />}
          />
          <Route
            exact
            path="/adminDashboard/newBuildingForm"
            element={adminLoggedIn ? <NewBuilding /> : <HomeScreen />}
          />
          <Route
            exact
            path="/adminDashboard/newCustomerForm"
            element={adminLoggedIn ? <NewCustomer /> : <HomeScreen />}
          />
          {/* CUSTOMER ROUTES */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
