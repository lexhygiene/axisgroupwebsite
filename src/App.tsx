/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BusinessDetail from "./pages/BusinessDetail";
import Sustainability from "./pages/Sustainability";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-saffron/30 selection:text-slate-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business/:id" element={<BusinessDetail />} />
            <Route path="/sustainability" element={<Sustainability />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
