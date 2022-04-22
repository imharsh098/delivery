import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./Components/TopNav";
import SideNav from "./Components/sideNav";
import Order from "./Components/Order";
import Product from "./Components/Product";
import Support from "./Components/Support";
import Review from "./Components/Review";
import Insight from "./Components/Insight";
import Wallet from "./Components/Wallet";
import Settings from "./Components/Settings";
import TermsConditions from "./Components/TermsConditions";
import Home from "./Components/Home";
import productModal from "./Components/ProductModal";

function App() {
  return (
    <Router>
      <TopNav />
      <div className="main">
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/reviews" element={<Review />}></Route>
          <Route path="/wallet" element={<Wallet />}></Route>
          <Route path="/insights" element={<Insight />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/terms" element={<TermsConditions />}></Route>
          <Route path="/productModal" element={<productModal />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
