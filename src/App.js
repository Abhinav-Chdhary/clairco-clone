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
import CompanyBuildings from "./AdminFiles/CompanyBuildings";
import CustomerDashboard from "./CustomerFiles/CustomerDashboard";
import AdminPrivateRoutes from "./util/AdminPrivateRoutes";

function App() {
  const customerLoggedIn = () => {
    if (localStorage.getItem("customerAuthToken")) return true;
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
          <Route element={<AdminPrivateRoutes />}>
            <Route exact path="/adminDashboard" element={<AdminDashboard />} />
            <Route
              exact
              path="/adminDashboard/createWhat"
              element={<CreateWhat />}
            />
            <Route
              exact
              path="/adminDashboard/newBuildingForm"
              element={<NewBuilding />}
            />
            <Route
              exact
              path="/adminDashboard/newCustomerForm"
              element={<NewCustomer />}
            />
            <Route
              exact
              path="/adminDashboard/companyBuildings/:id"
              element={<CompanyBuildings />}
            />
          </Route>
          {/* CUSTOMER ROUTES */}
          <Route
            exact
            path="/customerDashboard"
            element={customerLoggedIn ? <CustomerDashboard /> : <HomeScreen />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
