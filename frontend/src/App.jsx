import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { SignUp } from "./pages/Signup"
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
