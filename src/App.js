import React from "react";
import TitleBar from "./Components/TitleBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark">
        <TitleBar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
